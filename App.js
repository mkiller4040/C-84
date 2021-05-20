import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator} from 'react-navigation'
import Welcome from './screens/Welcome'
import {AppTabNavigator} from './components/AppTabNavigator'

export default function App() {
  return (
    <View style={styles.container}>
    <AppContainer></AppContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const switchNavigator = createSwitchNavigator(
  {
    Welcome : {screens : Welcome},
    BottomTab : {screens : AppTabNavigator},
  })

  const AppContainer = createAppContainer(switchNavigator)

