import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import db from '../config'
import firebase from 'firebase'
import { render } from 'react-dom'
import { MyHeader } from '../components/MyHeader'

export default class BookRequestScreen extends Component
{
  constructor()
  {
    super();
    this.state = 
    {
      userID : firebase.auth().currentUser.email,
      bookName : "",
      reason_to_request : "", 
    }
  }

  createUniqueID()
  {
    return Math.random().toString(36).substring(7)
  }

  addRequest = (bookName, reason_to_request) =>  
  {
    var userID = this.state.userID
    var randomRequestID = this.createUniqueID()
    db.collection('RequestedBooks').add(
      {
        "userID" : userID,
        "bookName" : bookName,
        "reasonToRequest" : reason_to_request,
        "requestID" : randomRequestID,
      })

      this.setState(
        {
          bookName : "",
          reason_to_request : ""
        })

        return Alert.alert("Book Requested Successfully !")
  } 

  render()
  {
    return(
    <View style = {{flex : 1}}>
      <MyHeader title = "Request Book"></MyHeader>
      <KeyboardAvoidingView style = {styles.keyBoardStyle}>
        <TextInput 
        style = {styles.formTextInput} 
        placeholder = {"Enter Book Name"}
        onChnageText = {(text) => 
        {
          this.setState(
            {
              bookName : text,
            })
        }}
        value = {this.state.bookName}>
        </TextInput>
        <TextInput 
        style = {[styles.formTextInput, {height : 300}]}
        multiline
        numberOfLines = {8}
        placeholder = {"Reason for Book Request"}
        onChnageText = {(text) => 
        {
          this.setState(
            {
              reason_to_request : text,
            })
        }}
        value = {this.state.reason_to_request}>
        </TextInput>
        <TouchableOpacity 
        style = {styles.button} 
        onPress = {() => 
          {
            this.addRequest(this.state.bookName, this.state.reasonToRequest)
          }}>
          <Text>Request</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    )
  }
}

const styles = StyleSheet.create(
  { 
    keyBoardStyle : { flex:1, alignItems:'center', justifyContent:'center' }, 
    formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, 
    button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8, }, 
    shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )