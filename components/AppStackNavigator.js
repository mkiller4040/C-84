import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import AppTabNavigator from './AppTabNavigator' 
import CustomSideBarMenu from './CustomSideBarMenu'
import EditScreen from '../screens/EditScreen'
import ReceiverInfo from '../screens/ReceiverInfo'
import BookDonateScreen from '../screens/BookDonate'

export const AppStackNavigator = createStackNavigator(
    {
      bookDonateList : 
      {
       screen : BookDonateScreen, 
       navigationOptions : {headerShown : false}
      },
      ReceiverInfo : 
      {
        screen : ReceiverInfo, 
        navigationOptions : {headerShown : false}
      }
    },
    {
      initialRouteName : "bookDonateList"
    })
