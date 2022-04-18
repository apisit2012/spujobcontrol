import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchScreen, {OptionSubAddSearch} from '../Add/SearchScreen'
import AddScreen from '../Add/AddScreen' 

export default function Add() {


  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='addSubAdd'>
      <Stack.Screen name='addSubAdd'  component={AddScreen} options={Option.add} />
      <Stack.Screen name='searchSubAdd'  component={SearchScreen} options={OptionSubAddSearch.search}  />
    </Stack.Navigator>
  )
}

const Option = {
  add:{
    title: 'Create',
  },
  search:{
    title: 'Search Component',
  },
}



export const OptionAdd = {
  tabBarLabel: 'Add',
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="plus-circle-outline" color={color} size={26} />
  ),
  headerShown:false
}



