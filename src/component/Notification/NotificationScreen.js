import { View, ScrollView, SafeAreaView, Image, TouchableOpacity, Text, RefreshControl } from 'react-native';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import { Server } from '../../constant';

export default function NotificationScreen({navigation}) {

  const accountReducer = useSelector(({accountReducer}) => accountReducer);

  const [data, setData] = React.useState([])


  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  

  const render = () => {
    axios.post(Server.render, accountReducer.account).then(response=>{
      setData(response.data.message)
    })
  }

  const readnotification = (data) => {
    axios.post(Server.read,data).then(response=>{
      let result = response.data.message
      result[0].id_emp = accountReducer.account.id_emp
      navigation.navigate('detailSubNotification',{result:response.data.message})
    })
  }

  React.useEffect(()=>{
    render()
  },[refreshing])

  return (
    <SafeAreaView style={{flex:1, display:'flex',justifyContent:'flex-start',
    alignItems:'center'}}>
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

        {
          data.map((val, index) => (
            <TouchableOpacity 
            onPress={()=> readnotification(val)}
            style={ 
              val.notification
              ? { width:'97%', height: 70, margin:3
            ,display:'flex', flexDirection:'row',justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'#99CCFF'
            }
          : { width:'97%', height: 70, margin:3
            ,display:'flex', flexDirection:'row',justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'#fafafa'
            }
          }
            key={index}>
                <Image style={{width: 57,height: 57,borderRadius: 50,marginLeft: 10, marginRight: 10,}}
              source={{uri: `https://drive.umcth.co.th/img/employee/${val.id_emp_todo}.jpg`}}/>
          <View style={{width:300, padding:10}} >
            <View style={{display:'flex', flexDirection:'row', 
            justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>{val.name}</Text>
            <Text>{val.status_flow_todo}</Text>
            </View>

          
            <View style={{display:'flex', flexDirection:'row', 
            justifyContent:'space-between', alignItems:'center'}} >
            <Text>{val.name_jobtype}</Text>
            <Text>{val.component}</Text>
            </View>

          </View>

            </TouchableOpacity>
          ))
        }

      </ScrollView>
    </SafeAreaView>
  )
}