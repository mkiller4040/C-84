import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'
import { render } from 'react-dom'
import Welcome from '../screens/Welcome'

export default class CustomSideBarMenu extends Component
{
  render()
  {
    return(
    <View style = {{flex : 1}}>
      <View style = {styles.drawerItemsContainer}>
        <DrawerItems {...this.props}></DrawerItems>
      </View>
      <View style = {styles.logOutContainer}>
        <TouchableOpacity 
        style = {styles.logOutButton} 
        onPress = {() => 
            {
              this.props.navigation.navigate("")
              firebase.auth().signOut()
            }}>
        <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}


const styles = StyleSheet.create(
    { 
      keyBoardStyle : { flex:1, alignItems:'center', justifyContent:'center' }, 
      formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', 
      borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, 
      button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', 
      borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, 
      shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, 
    })

