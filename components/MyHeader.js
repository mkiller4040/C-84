import React, { Component } from 'react'
import { Header } from 'react-native-elements'

export const MyHeader = (props) => 
{
  return(
      <Header centerComponent = 
      {
          {
            text : props.title,
            style : {color : "orange", fontSize : 20, fontWeight : "bold"}
          }
      }
          backgroundColor = "darkorange">
      </Header>
  )
}