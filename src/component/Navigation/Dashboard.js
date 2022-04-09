import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from '../Dashboard/DashboardScreen'
import DetailScreen from '../Dashboard/DetailScreen'
import ReportScreen from '../Dashboard/ReportScreen'
import SearchScreen from '../Dashboard/SearchScreen'


export default function Dashboard() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='dashboardSubDashboard' >
      <Stack.Screen name='dashboardSubDashboard' component={DashboardScreen} options={OptionSub.dashboard}/>
      <Stack.Screen name='detailSubDashboard' component={DetailScreen} />
      <Stack.Screen name='reportSubDashboard' component={ReportScreen} />
      <Stack.Screen name='searchSubDashboard' component={SearchScreen} />
    </Stack.Navigator>
  )
}

export const OptionDashboard = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
  ),
  headerShown:false
}

const OptionSub = {
  dashboard:{
    title: 'IT Task Monitoring',
  }
}