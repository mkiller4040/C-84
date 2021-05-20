import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import db from '../config'
import firebase from 'firebase'
import { render } from 'react-dom'
import {ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader'

export default class BookDonateScreen extends Component
{
  constructor()
  {
    super();
    this.state = 
    {
      requestedBookList : []
    }

    this.requestRef = null
  }

  getRequestedBooksList = () => 
  {
    this.requestRef = db.collection("Requested_Books").onSnapShot((snapShot) => 
    {
      var requestedBooksList = snapShot.docs.map((document) => 
      {
        document.data()
      })
      console.log(requestedBooksList)
      this.setState(
        {
          requestedBookList : requestedBooksList
        })
    })
  }

  componentDidMount()
  {
    this.getRequestedBooksList()
  }
//complete the flat list next class
  componentWillUnmount()
  {
    this.requestRef()
  }

  keyExtractor = (item, index) => 
  {
    index.toString()
  }

  renderItem = ({item, i}) => 
  {
    return(
      <ListItem key = {i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title style = {{color : "black", fontWeight : "bold"}}>{item.book_name}</ListItem.Title>
          <ListItem.Subtitle style = {{color : "grey"}}>{item.reason_to_request}</ListItem.Subtitle>
          <TouchableOpacity onPress = {() => 
          {
            this.props.navigation.navigate('ReceiverInfo', {"details" : item})
          }}>
          <Text>View Info</Text>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>
    )
  }

  render()
  {
    return(
    <View style = {{flex : 1}}>
      <MyHeader title = "Donate Books"></MyHeader>
      <View style = {{flex : 1}}>
      {this.state.requestedBookList.length === 0
      ?(<View style = {styles.subContainer}><Text style = {{fontSize : 20}}>All Previously Requested Books</Text></View>)
        : (<FlatList 
        keyExtractor = {this.keyExtractor} 
        data = {this.state.requestedBookList} 
        renderItem = {this.renderItem}>
        </FlatList>)}
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create(
  { 
    subContainer:{ flex:1, fontSize: 20, 
    justifyContent:'center', alignItems:'center' }, 
    button:{ width:100, height:30, justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:"#ff5722", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8 } } 
  })

