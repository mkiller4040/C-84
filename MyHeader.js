import React, { Component } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import { Icon, Header, Badge} from 'react-native-elements';
import db from "./config";
import * as firebase from 'firebase';

export default class MyHeader extends React.Component 
{
  constructor(props)
  {
    super(props);

    this.state = 
    {
      value : '',
    }
  }

  getNumberOfUnreadNotifs = () => 
  {
    db.collection("All Notifications").where('notification_status', '==', 'unread').onSnapshot((snapshot) =>
    {
      var unreadNotif = snapshot.docs.map((doc) => doc.data())
      this.setState(
        {
          value : unreadNotif.length
        })
    })
  }

  componentDidMount()
  {
    this.getNumberOfUnreadNotifs()
  }

  BellIconWithBadge = () =>
  {
    return(
        <View>
            <Icon name = "bell" type = "font-awesome" color = "darkgrey" onPress = {() => 
              {
                props.navigation.navigate('notification')
              }}
            />
            <Badge value = {this.state.value} containerStyle = {{position : "absolute", top : -4, right : -4}}></Badge>
        </View>
    ) 
  }

  render()
  {
  return(
      <Header 
      leftComponent = 
      {
      <Icon name = "bars" type = "font-awesome" color = "darkgrey" onPress = {() => 
        {
          props.navigation.toggleDrawer()
        }}/>
      }
      centerComponent = {{text : props.title, style : {color : "darkblue", fontSize : 20, fontWeight : "bold"}}}
      backgroundColor = "lightblue"
      rightComponent = {<this.BellIconWithBadge {...this.props}/>}
      />
  )
  }
}


