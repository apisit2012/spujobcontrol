import React from 'react'
import { View } from 'react-native'
import {Badge} from 'react-native-paper';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux'

import NotificationScreen from '../Notification/NotificationScreen'
import DetailScreen from '../Notification/DetailScreen';
import axios from 'axios';
import { Server } from '../../constant';




export default function Notification() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="notificationSubNotification">
        <Stack.Screen name='notificationSubNotification' component={NotificationScreen} options={Option.notihome}/>
        <Stack.Screen name='detailSubNotification' component={DetailScreen} options={Option.detail} />
    </Stack.Navigator>
  )
}

const Option = {
  notihome:{
    title: 'Notification',
  },
  detail:{
    title: 'Detail',
  }
}


// http request bange
const bange = () => {
  const accountReducer = useSelector(({accountReducer}) => accountReducer);
  const [data, setDate] = React.useState()
  React.useEffect(()=>{
    axios.post(Server.bange,accountReducer.account).then(response=>{
      setDate(response.data.message)
    })
  },[])
  return data
}

//option bange
export const OptionNotification =  {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({color}) => (
    <View style={{display: 'flex', flexDirection: 'row'}}>
    <MaterialCommunityIcons name="bell" color={color} size={26} />
    <Badge style={{left: -13, top: -7}}  visible={true}> {bange()} </Badge>
  </View>
  ),
  headerShown:false
}