import { View, ScrollView, SafeAreaView, Image, TouchableOpacity, Text, RefreshControl } from 'react-native';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { Server } from '../../constant';

export default function ReportScreen() {

  const accountReducer = useSelector(({accountReducer}) => accountReducer);

  
  const [refreshing, setRefreshing] = React.useState(false);
  const [check, setCheck] = React.useState(false)
  const [data, setData] = React.useState([]);
  const [selectData, setSelectData] = React.useState({})

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  React.useEffect(()=>{
    axios.post(Server.findallReport).then(response=>{
      setData(response.data.message)
      
    })
  },[])





  const changeCheck = (id) => {
    setData([id].name = "5555")
    console.log(data);
  }


  return (
    <View style={{flex:1, display:'flex', backgroundColor:'#fafafa', marginTop:10, justifyContent:'flex-start', alignItems:'center'}}>

      <View style={{width:'90%', height:50 , display:'flex',flexDirection:'row',justifyContent:'space-between'
    , alignItems:'center'}}>
      <Image style={{width: 60,height: 60,borderRadius: 50,marginLeft: 10, marginRight: 10,}}
              source={{uri: `https://drive.umcth.co.th/img/employee/${accountReducer.account.id_emp}.jpg`}}/>
      
      <View>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{accountReducer.account.name}</Text>
        <Text style={{fontSize:16, fontWeight:'bold'}}>{accountReducer.account.email}</Text>
      </View>

      <View>

      </View>
      <TouchableOpacity style={{width:60, height:30, backgroundColor:'#CCCCFF', display:'flex'
    ,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#CC00FF', fontWeight:'bold'}}>Create</Text>
      </TouchableOpacity>
      </View>

      <SafeAreaView style={{width:'90%', borderTopWidth:1, marginTop:30}}>
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
        {data.map((val, index)=>(
          <TouchableOpacity 
          onPress={()=> 
            changeCheck(index)
            }
          // onPress={()=> setData([{...data,check: data.check ? false : true}])
          
          style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',
          width:'90%', height:37}}>
            <Text style={{fontWeight:'bold'}}>{val.name_jobtype}</Text>
            <Text style={{fontWeight:'bold'}}>{val.component}</Text>
            <MaterialCommunityIcons name={ val.check
                                          ? 'checkbox-marked-circle'
                                          : 'checkbox-blank-circle-outline'} 
                                          
                                    color={ val.check
                                          ? "#dfdf"
                                          : "#000"
            } size={25} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      </SafeAreaView>

    </View>
  )
}