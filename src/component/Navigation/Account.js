import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountScreen from '../Account/AccountScreen'

export default function Account() {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName="accountSubAccount">
        <Stack.Screen name='accountSubAccount' component={AccountScreen} />
    </Stack.Navigator>
  )
}

export const OptionAccount = {
  tabBarLabel: 'Account',
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
  ),
  headerShown:false
}