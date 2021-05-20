import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import {createDrawerNavigator} from 'react-navigation-drawer'
import AppTabNavigator from './AppTabNavigator' 
import CustomSideBarMenu from './CustomSideBarMenu'
import EditScreen from '../screens/EditScreen'
import NotificationScreen from '../screens/NotificationScreen'

export const AppDrawerNavigator = createDrawerNavigator(
    {
    //   Home : {screen : AppTabNavigator},
    //   //Setting : {screen : EditScreen},
    // },

    // {
    //   contentComponent : CustomSideBarMenu
    // },
    
    // {
    //   initialRouteName : 'Home' 
    Home : { screen: AppTabNavigator }, 
    MyDonations : { screen: MyDonationScreen }, 
    Notifications : { screen: NotificationScreen }, 
    Settings : { screen: SettingScreen }, }, 
    { contentComponent: CustomSideBarMenu }, 
    { initialRouteName: 'Home' }

    )