import React from 'react'
import LottieView from 'lottie-react-native'

export default class Bird extends React.Component 
{
  render()
  {
    return(
        <LottieView source = {require("../assets/17732-flying-bird.json")} style = {{width : "60%"}} autoPlay loop></LottieView>
    )
  }
}