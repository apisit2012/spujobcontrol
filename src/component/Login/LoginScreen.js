import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux'
import * as accountAction from '../../action/accountAction'


export default function LoginScreen() {

  const usedispatch = useDispatch()

  const [data, setData] = React.useState({})

  const login = () => {

    if(data.id_emp == "" || data.password == ""){
      Alert.alert("Information","ID EMP OR Password Incorrect!!!")
    } else {
      usedispatch(accountAction.login(data))
    }
  }

  return (
    <View style={{flex:1, display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
      <Image source={require('../../../logo_umc.png')} style={{width:195, height: 96, marginTop:50}} />

      <View style={{width:'100%', marginTop:45}}>
      <View style={{width:200, height:65 , backgroundColor:'#3300FF', display:'flex', justifyContent:'center', alignItems:'center', 
              borderTopRightRadius:50, borderBottomRightRadius:50}}>
        <Text style={{fontSize:16, color:'#fff', fontWeight:'bold'}}>Sign In To Continue</Text>
      </View>
      </View>


      <View style={{marginTop:30}}>
          <TextInput style={{width:270, height:40, backgroundColor:'#fafafa',borderRadius:20, paddingLeft:20, marginTop:10, borderColor:'#d3d3d3', borderWidth:2}} 
          onChangeText={e=> setData({...data, id_emp:e})}
          placeholder={"ID Emp"}
          keyboardType='numeric'
          maxLength={4}
          />
          <TextInput style={{width:270, height:40, backgroundColor:'#fafafa',borderRadius:20, paddingLeft:20, marginTop:30, borderColor:'#d3d3d3', borderWidth:2}} 
          onChangeText={e=> setData({...data, password:e})}
          placeholder={"Password"}
          secureTextEntry={true}
          />
          <View>
            <View style={{width:130, height:30 ,right:-190,marginTop:25}} >
              <TouchableOpacity 
              onPress={()=> login() }
              >
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around',
                alignItems:'center',width:80, height:35,backgroundColor:'#FF00FF',borderRadius:25}} >
                <MaterialCommunityIcons name='arrow-right' size={25} color="#fff" />
                <Text style={{fontWeight:'bold',color:'#fff', fontSize:14.5}}>
                      Login 
                </Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
      </View>
      <Text style={{marginTop:50, fontSize:14, fontWeight:'bold', color:'#CC33FF'}} >FOR IT UMCTH ONLY</Text>
    </View>
  )
}