import React from 'react'
import { View, ScrollView, SafeAreaView, Image, TouchableOpacity, Text, RefreshControl } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import * as dashboardAction from '../../action/dashboardAction'

import PostScreen from './PostScreen'
import FeedScreen from './FeedScreen'
import ChartScreen from './ChartScreen'
import { Server } from '../../constant';
import axios from 'axios';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function DashboardScreen({navigation,route}) {

    const accountReducer = useSelector(({accountReducer}) => accountReducer);
    const dashboardReducer = useSelector(({dashboardReducer}) => dashboardReducer);

    const usedispatch = useDispatch()

    const [post, SetPost] = React.useState([])
    const [data, setData] = React.useState()
    const [button, setButton] = React.useState([]);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  

    const onChangeButton = async (title) => {
        await title == "pending"
      ? SetPost(data.pending.data.add.data) 
      : await title == "review" 
      ? SetPost(data.pending.data.review.data) 
      : await title == "follow" 
      ? SetPost(data.followapprove.data)
      : await title == "closejob" 
      ? SetPost(data.closejob.data)
      : SetPost(data.total.data)
    }




    const onPressDetail = async (data) => {
      const result = await post.filter((res)=>res.id_event == data)
      await navigation.navigate("EventetailScreenSubDashboard",{result})
    }


    React.useEffect(()=>{
      axios.post(Server.dashboard,accountReducer.account).then(response=>{
        setButton([
          {name:"pending",count:response.data.message.pending.data.add.count == 'null' ? 0 : response.data.message.pending.data.add.count},
          {name:"review",count:response.data.message.pending.data.review.count == 'null'? 0 : response.data.message.pending.data.review.count},
          {name:"follow",count:response.data.message.followapprove.count == 'null' ? 0 : response.data.message.followapprove.count},
          {name:"closejob",count:response.data.message.closejob.count == 'null' ? 0 : response.data.message.closejob.count},
          {name:"total",count:response.data.message.total.count == 'null' ? 0 : response.data.message.total.count},
        ])
        SetPost(response.data.message.pending.data.add.data)
        setData(response.data.message)
      })
    },[refreshing])


    return (
      <View style={{flex: 1,width: 430, diplay:'flex', justifyContent: 'flex-start', alignItems: 'center',backgroundColor: '#D3D3D3'}}>
        <View style={{ width: 420,backgroundColor: '#d3d3d3', diplay:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
          <SafeAreaView>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            contentInset={{top: 1}}
            refreshControl={
              <RefreshControl 
              refreshing={refreshing}
              onRefresh={onRefresh}
              />
            }
            >

                <View style={{width: 420,height: 55,display: 'flex',justifyContent: 'flex-start',alignItems: 'center',flexDirection: 'row',backgroundColor:'#fafafa'}}>
                  <Image style={{width: 35,height: 35,borderRadius: 50,marginLeft: 10, marginRight: 10,}}source={{uri: `https://drive.umcth.co.th/img/employee/2498.jpg`}}/>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('reportSubDashboard')}>
                    <Text>I When To Create Report</Text>
                </TouchableOpacity>
                </View>

              <View style={{display:'flex', flexDirection:'row'}}>
                {button.map((val, index)=>  <FeedScreen name={val.name} count={val.count}  onChangeButton={onChangeButton}  key={index} /> )}

              </View>
              <ChartScreen  />

              { post.map((val)=> <PostScreen  key={val.id_event} id_creater={val.id_creater} create_date={val.create_date}
                name_jobtype={val.name_jobtype} component={val.component} no_event={val.no_event} id_status_flow={val.id_status_flow} 
                name={val.name} onPressDetail={onPressDetail} id_event={val.id_event} /> )}
              
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    )
}