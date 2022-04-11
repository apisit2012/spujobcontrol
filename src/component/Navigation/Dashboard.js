import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from '../Dashboard/DashboardScreen'
import EventetailScreen from '../Dashboard/EventetailScreen'
import ReportScreen from '../Dashboard/ReportScreen'
import SearchScreen from '../Dashboard/SearchScreen'
import SearchAssignScreen from '../Dashboard/SearchAssignScreen';

export default function Dashboard({navigation}) {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='dashboardSubDashboard' >
      <Stack.Screen name='dashboardSubDashboard' component={DashboardScreen} options={OptionSub.dashboard}/>
      <Stack.Screen name='EventetailScreenSubDashboard' component={EventetailScreen} />
      <Stack.Screen name='reportSubDashboard' component={ReportScreen} />
      <Stack.Screen name='searchSubDashboard' component={SearchScreen} />
      <Stack.Screen name='searchAssignSubDashboard' component={SearchAssignScreen} />
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