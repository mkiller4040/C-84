import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import { MyHeader } from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class EditScreen extends Component
{
    constructor()
    {
      super()

      this.state = 
      {
        firstName : "",
        lastName : "",
        emailID : "",
        address : "",
        phoneNo : '',
        docID : '',
      }
    }

    updateUserDetails = () =>
    {
      db.collection("Users").doc(this.state.docID).update(
          {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            emailID : this.state.emailID,
            address : this.state.address,
            phoneNo : this.state.phoneNo,
          })
        
      Alert.alert("Details have been updated successfully")
    }

    getUserDetails = () => 
    {
      var email = firebase.auth().currentUser.email;
      db.collection("Users").where('emailID', "==", email).get().then((snapshot) => 
      {
        snapshot.forEach((doc) => 
        {
          var data = doc.data()
          this.setState(
              {
                firstName : data.firstName,
                lastName : data.lastName,
                emailID : data.emailID,
                address : data.address,
                phoneNo : data.phoneNo,
                docID : doc.id
              })
        })
      })
    }

    componentDidMount()
    {
      this.getUserDetails()
    }

  render()
  {
    return(
        <View style = {styles.container}>
          <Text>Edit Screen</Text>
          <MyHeader title = "Settings" navigation = {this.props.navigation}></MyHeader>
          <View style = {styles.formContainer}>
            <TextInput style = {styles.formTextInput} 
            placeholder = "Enter First Name" 
            maxlength = {8}
            onChangeText = 
            {
              (text) => 
              {
                this.setState(
                    {
                      firstName : text
                    })
              }
            }
            value = {this.state.firstName}>
            </TextInput>
            <TextInput style = {styles.formTextInput} 
            placeholder = "Enter Last Name" 
            maxlength = {8}
            onChangeText = 
            {
              (text) => 
              {
                this.setState(
                    {
                      lastName : text
                    })
              }
            }
            value = {this.state.lastName}>
            </TextInput>
            <TextInput style = {styles.formTextInput} 
            placeholder = "Enter Email ID" 
            maxlength = {30}
            onChangeText = 
            {
              (text) => 
              {
                this.setState(
                    {
                      emailID : text
                    })
              }
            }
            value = {this.state.emailID}>
            </TextInput>
            <TextInput style = {styles.formTextInput} 
            placeholder = "Enter Address" 
            maxlength = {60}
            onChangeText = 
            {
              (text) => 
              {
                this.setState(
                    {
                      address : text
                    })
              }
            }
            value = {this.state.address}>
            </TextInput>
            <TextInput style = {styles.formTextInput} 
            placeholder = "Enter Phone Number" 
            maxlength = {12}
            keyboardType = {"numeric"}
            onChangeText = 
            {
              (text) => 
              {
                this.setState(
                    {
                        phoneNo : text
                    })
              }
            }
            value = {this.state.phoneNo}>
            </TextInput>
            <TouchableOpacity style = {styles.button} onPress = 
            {
              () => 
              {
                this.updateUserDetails()
              }
            }>
            <Text style = {styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
    },
    buttonText:{
      fontSize:25,
      fontWeight:"bold",
      color:"#fff"
    }
  })
