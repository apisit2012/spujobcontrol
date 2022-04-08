import React from 'react'
import { View } from 'react-native'
import {Badge} from 'react-native-paper';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NotificationScreen from '../Notification/NotificationScreen'
import DetailScreen from '../Notification/DetailScreen';


export default function Notification() {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName="notificationSubNotification">
        <Stack.Screen name='notificationSubNotification' component={NotificationScreen} />
        <Stack.Screen name='detailSubNotification' component={DetailScreen} />
    </Stack.Navigator>
  )
}

export const OptionNotification = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({color}) => (
    <View style={{display: 'flex', flexDirection: 'row'}}>
    <MaterialCommunityIcons name="bell" color={color} size={26} />
    <Badge style={{left: -13, top: -7}}  visible={true}> 1 </Badge>
  </View>
  ),
  headerShown:false
}