import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import Dashboard, { OptionDashboard } from './Dashboard'
import Add, { OptionAdd } from './Add'
import Notification, { OptionNotification } from './Notification';
import Account, { OptionAccount } from './Account';
import {useSelector} from 'react-redux'
import LoginScreen from '../Login/LoginScreen'


export default function Navigation() {
  
  const appReducer = useSelector(({appReducer}) => appReducer);
  const Tab = createBottomTabNavigator();

  
return(
  <SafeAreaView style={{flex:1}}>
    {appReducer.isLoggedIn 
    ?( 
      <Tab.Navigator initialRouteName='dashboardMin'>
      <Tab.Screen name='dashboardMin' component={Dashboard}  options={OptionDashboard} />
      <Tab.Screen name='addMin' component={Add} options={ OptionAdd } />
      <Tab.Screen name='notificationMin' component={Notification} options={OptionNotification} /> 
      <Tab.Screen name='accountMin' component={Account} options={OptionAccount} />
      </Tab.Navigator>
    )
    :(
      <LoginScreen />
    )}
  </SafeAreaView>
)
 

}