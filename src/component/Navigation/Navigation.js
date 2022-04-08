import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard, { OptionAccount } from './Dashboard'
import Add, { OptionAdd } from './Add'
import Notification, { OptionNotification } from './Notification';
import Account from './Account';


export default function Navigation() {

  const Tab = createBottomTabNavigator();

  return (
        <Tab.Navigator initialRouteName='dashboardMin'>
            <Tab.Screen name='dashboardMin' component={Dashboard}  options={OptionAccount} />
            <Tab.Screen name='addMin' component={Add} options={ OptionAdd } />
            <Tab.Screen name='notificationMin' component={Notification} options={OptionNotification} />
            <Tab.Screen name='accountMin' component={Account} options={OptionAccount} />
        </Tab.Navigator>
  )
}