import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import * as dashboardAction from '../../action/dashboardAction'

import PostScreen from './PostScreen'
import FeedScreen from './FeedScreen'
import ChartScreen from './ChartScreen'
import DetailScreen from './DetailScreen'

export default function DashboardScreen({navigation}) {

    const dashboardReducer = useSelector(({dashboardReducer}) => dashboardReducer);
    const accountReducer = useSelector(({accountReducer}) => accountReducer);

    const usedispatch = useDispatch()

    const [button, setButton]  =  React.useState([])
    const [post, setPost] = React.useState([])

    const changeDetail = (data) => {

      if(data == "pending"){
        setPost(dashboardReducer.dashboard.pending.data.adddata)
      }

    }

    React.useEffect(()=>{
      usedispatch(dashboardAction.renderpage_dashboard(accountReducer.account))
      setTimeout(()=>{
        usedispatch(dashboardAction.renderpage_dashboard(accountReducer.account))
        setButton([
          { namebutton:"pending", count: dashboardReducer.dashboard.pending.count },
          { namebutton:"follow", count: dashboardReducer.dashboard.followapprove.count },
          { namebutton:"closejob", count: dashboardReducer.dashboard.closejob.count },
          { namebutton:"total", count: dashboardReducer.dashboard.total.count },
        ])
        changeDetail("pending")
      },1000)
    },[])


    return (
      <View style={{flex: 1, diplay:'flex', justifyContent: 'flex-start', alignItems: 'center',backgroundColor: '#D3D3D3'}}>
        <View style={{ width: 391,backgroundColor: '#fff',borderWidth: 1,borderColor: '#fafafa',}}>
          <SafeAreaView style={{backgroundColor:'#d3d3d3', diplay:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <ScrollView>

              <PostScreen />

              <View style={{ width: 388, height:60,display: 'flex',flexDirection:'row',justifyContent: 'space-evrenly',alignItems: 'center',borderWidth: 1,borderColor: '#fafafa'}} >
                {button.map((val,index)=> <FeedScreen status={val.namebutton} count={val.count} key={index} />)}
              </View>

              <ChartScreen />

              <View style={{width: 390,display: 'flex',justifyContent: 'center',alignItems: 'center'}} >

                {/* {[post.map((val, index)=> <DetailScreen id_creter={val.id_creater}, create_date={val.create_date} type={val.name_jobtype}, status={"pending"}, no_event={val.no_event} /> )]} */}

              </View>


            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    )
}