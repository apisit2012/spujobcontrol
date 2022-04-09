import { SafeAreaView, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/component/Navigation/Navigation'
import React from 'react'

const Tat = () => {
  return(
    <View>
      <Text>5555</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView />
      {/* <Tat /> */}
      <Navigation />
    </NavigationContainer>
  )
}