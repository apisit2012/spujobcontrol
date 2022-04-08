import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'

import PostScreen from './PostScreen'
import FeedScreen from './FeedScreen'
import ChartScreen from './ChartScreen'
import DetailScreen from './DetailScreen'

export default function DashboardScreen({navigation}) {

    const dashboardReducer = useSelector(({dashboardReducer}) => dashboardReducer);

    const [button, SerButton] = React.useState(["pending", "follow", "closejob", "total"])

    return (
      <View style={{flex: 1, diplay:'flex', justifyContent: 'flex-start', alignItems: 'center',backgroundColor: '#D3D3D3'}}>
        <View style={{ width: 391,backgroundColor: '#fff',borderWidth: 1,borderColor: '#fafafa',}}>
          <SafeAreaView style={{backgroundColor:'#d3d3d3', diplay:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <ScrollView>

              <PostScreen />

              <View style={{ width: 388, height:60,display: 'flex',flexDirection:'row',justifyContent: 'space-evenly',alignItems: 'center',borderWidth: 1,borderColor: '#fafafa'}} >
                {button.map((val,index)=> <FeedScreen status={val} key={index} />)}
              </View>

              <ChartScreen />

              <DetailScreen />

            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    )
}