import * as React from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Alert, Image, Modal, ScrollView, KeyboardAvoidingView, SnapshotViewIOS } from 'react-native'
import firebase from 'firebase';
import db from '../config.js';

export default class ReceiverInfo extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      userID : firebase.auth().currentUser.email,
      receiverID : this.props.navigation.getParam("details")["userID"],
      requestID : this.props.navigation.getParam("details")["requestID"],
      bookName : this.props.navigation.getParam("details")["bookName"],
      reason_to_request : this.props.navigation.getParam("details")["reason_to_request"],
      receiverName : "",
      receiverRequestDocID : '',
      phoneNo : '',
      address : '',
    }
  }

  getReceiversDetails()
  {
    db.collection("Users").where('emailID', '==', this.state.receiverID).get().then(snapshot => 
        {
          snapshot.forEach(doc => 
            {
              this.setState(
                  {
                    receiverName : doc.data().firstName,
                    phoneNo : doc.data().phoneNo,
                    address : doc.data().address
                  })
            })
        })

    db.collection("requestedBooks").where('requestID', '==', this.state.receiverID).get().then(snapshot => 
        {
          snapshot.forEach(doc => 
            {
              this.setState(
                  {
                    receiverRequestDocID : doc.id,
                  })
            })
        })

  }

  updateBookStatus = () => 
  {
    db.collection("allDonations").add(
        {
          bookName : this.state.bookName,
          requestID : this.state.requestID,
          requestedBy : this.state.receiverName,
          donorID : this.state.userID,
          requestStatus : "donor_interested"
        })
  }

  getUserDetails = (userID) => 
  {
    db.collection("Users").where('emailID', '==', userID).get().then((snapshot) => 
    {
      snapshot.forEach(doc => 
        {
          console.log("getUserDetails" + doc.data())
          this.setState(
            {
              username : doc.data().firstName + " " + doc.data().lastName
            })
        })
    })
  }

  componentDidMount()
  {
    this.getReceiversDetails()
    this.getUserDetails(this.state.userID)
  }

  addNotification = () => 
  {
    var message = this.state.username + "has shown an interest in donating the book you want."
    db.collection("All Notifications").add(
      {
        targeted_user_ID : this.state.receiverID,
        donorID : this.state.userID,
        requestID : this.state.requestID,
        bookName : this.state.bookName,
        date : firebase.firestore.FieldValue.serverTimestamp(),
        notification_status : "Unread",
        message : message,
      })
  }

  render()
  {
    return(
        <View style = {styles.container}>
          <View style = {{flex : 0.1}}>
            <Header 
            leftComponent = {<Icon name = "arrow-left" type = "feather" color = "darkblue"
            onPress = {() => 
            {
              this.props.navigation.goBack()
            }}
            ></Icon>}
            centerComponent = {{text : "Donate Books", style : {color : "blue", fontSize : 20, fontWeight : "bold"}}}
            backgroundColor = "darkblue">
            </Header>
          </View>
          <View style = {{flex : 0.3}}>
            <Card.Title>Book Information</Card.Title>
            <Card><Text style = {{fontWeight : "bold"}}>Name : {this.state.bookName}</Text></Card>
            <Card><Text style = {{fontWeight : "bold"}}>Reason : {this.state.reason_to_request}</Text></Card>
          </View>
          <View style = {{flex : 0.3}}>
            <Card.Title>Book Information</Card.Title>
            <Card><Text style = {{fontWeight : "bold"}}>Name : {this.state.receiverName}</Text></Card>
            <Card><Text style = {{fontWeight : "bold"}}>Contact : {this.state.phoneNo}</Text></Card>
            <Card><Text style = {{fontWeight : "bold"}}>Address : {this.state.address}</Text></Card>
          </View>
          <View style = {styles.buttonContainer}>
            {this.state.receiverID != this.state.userID ? 
            (<TouchableOpacity 
            style = {styles.button}
            onPress = {() => 
              {
                this.updateBookStatus()
                this.addNotification()
                this.props.naviagtion.navigate('myDonations')
              }}><Text>I want to donate</Text></TouchableOpacity>)
            : null
              }
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create(
  { 
    container: 
    { 
     flex:1, 
    }, 
    buttonContainer : 
    { flex:0.3, justifyContent:'center', alignItems:'center' }, 
    button:{ width:200, height:50, justifyContent:'center', alignItems : 'center', borderRadius: 10, backgroundColor: 'orange', shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, elevation : 16 } 
  })