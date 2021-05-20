import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView, Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import BookDonateScreen from '../screens/BookDonate'
import BookRequestScreen from '../screens/BookRequest'

export const AppTabNavigator = createBottomTabNavigator(
  {
    BookDonate: {screen: BookDonateScreen, 
        navigationOptions : 
        {tabBarIcon : <Image source = {require("../assets/GivingBookImage.png")} style = {{width : 20, height : 20}}></Image>,
    tabBarLabel : "Donate Book"}},

    BookRequest : {screen: BookRequestScreen, 
        navigationOptions : 
        {tabBarIcon : <Image source = {require("../assets/TakingBookImage.png")} style = {{width : 20, height : 20}}></Image>,
    tabBarLabel : "Request Book"}},
    
  });
