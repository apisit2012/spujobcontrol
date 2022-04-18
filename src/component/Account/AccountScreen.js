import { View, Text, Image } from 'react-native'
import React from 'react'
import axios from 'axios'
import { Server } from '../../constant'
import {useSelector, useDispatch} from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AccountScreen() {

  const accountReducer = useSelector(({accountReducer}) => accountReducer);

  const [data, setData] = React.useState({})

  React.useEffect(()=>{
    axios.post(Server.accountFindByPk,accountReducer.account).then(response=>{
      setData(response.data.data[0])
    })
  },[])

  //https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60

  return (
    <View style={{flex:1, display:'flex', justifyContent:'flex-start', alignItems:'center'
    ,backgroundColor:'#d3d3d3'}}>
      <View style={{width:'95%', height:180, backgroundColor:'#fafafa',marginTop:10}}>
      <Image style={{width: '100%',height: '100%'}}
              source={{uri:`https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}}/>
      </View>
      <View style={{width:120, height:120, borderRadius:150
      ,left:-120,top:-50,borderWidth:3,display:'flex',justifyContent:'center'
      ,alignItems:'center',borderColor:'#fafafa'}}>
      <Image style={{width: 110,height: 110,borderRadius: 150}}
              source={{uri: `https://drive.umcth.co.th/img/employee/2498.jpg`}} />
      </View>
      <View style={{width:'95%'}}>
      <Text style={{fontSize:21, fontWeight:'bold'}}>{data.name}</Text>
      </View>

      <View style={{width:'95%', height:'22%', backgroundColor:'#fafafa'}}>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'
        ,height:20,marginTop:10}}>
        <MaterialCommunityIcons name='bank-outline' color='#CC00FF' size={25} />
        <Text style={{fontWeight:'bold'}}> Work at UMC Electronics - Thailand Limited</Text>
        </View>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'
        ,height:20,marginTop:10}}>
        <MaterialCommunityIcons name='email' color='#CC00FF' size={25} />
        <Text style={{fontWeight:'bold'}}> {data.email}</Text>
        </View>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'
        ,height:20,marginTop:10}}>
        <MaterialCommunityIcons name='account-star' color='#CC00FF' size={25} />
        <Text style={{fontWeight:'bold'}}> {data.position}</Text>
        </View>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'
        ,height:20,marginTop:10}}>
        <MaterialCommunityIcons name='account-cash' color='#CC00FF' size={25} />
        <Text style={{fontWeight:'bold'}}> {data.department}</Text>
        </View>
        
  
      </View>

 
    </View>
  )
}