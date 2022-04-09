import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import * as dashboardAction from '../../action/dashboardAction'

import PostScreen from './PostScreen'
import FeedScreen from './FeedScreen'
import ChartScreen from './ChartScreen'

export default function DashboardScreen({navigation}) {

    // const dashboardReducer = useSelector(({dashboardReducer}) => dashboardReducer);
    // const accountReducer = useSelector(({accountReducer}) => accountReducer);

    const usedispatch = useDispatch()

    const [button, setButton]  =  React.useState([])
    const [post, setPost] = React.useState([])





    return (
      <View style={{flex: 1, diplay:'flex', justifyContent: 'flex-start', alignItems: 'center',backgroundColor: '#D3D3D3'}}>
        <View style={{ width: 391,backgroundColor: '#fff',borderWidth: 1,borderColor: '#fafafa',}}>
          <View style={{backgroundColor:'#d3d3d3', diplay:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <ScrollView>

              <PostScreen />

                <View>
                  
                </View>

              <ChartScreen />


            </ScrollView>
          </View>
        </View>
      </View>
    )
}