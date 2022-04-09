import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/component/Navigation/Navigation'

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView />
      <Navigation />
      
    </NavigationContainer>
  )
}