import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchScreen from '../Add/SearchScreen'
import AddScreen from '../Add/AddScreen' 

export default function Add() {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='addSubAdd'>
      <Stack.Screen name='addSubAdd'  component={AddScreen} />
      <Stack.Screen name='searchSubAdd'  component={SearchScreen} />
    </Stack.Navigator>
  )
}

export const OptionAdd = {
  tabBarLabel: 'Add',
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
  ),
  headerShown:false
}

