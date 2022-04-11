import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import { Server } from '../../constant';
import * as componentAction from '../../action/componentAction'


export default function SearchScreen({navigation}) {

  
  const usedispatch = useDispatch()

  var search = {}
  const [data, setData] = React.useState([])


  const searchdata = () => {
    axios.post(Server.searchComponent,search).then(response=>{
      setData(response.data.message)
    })
  }

  return (
    <View style={{flex:1,display:'flex', justifyContent:'flex-start', alignItems:'center', backgroundColor:'#d3d3d3',  }}>
      <View>
        <TextInput 
        value={search}
        onChangeText={e=>{
          search={data:e}
          searchdata()}}
        style={{width: 300, backgroundColor:'#d3d3d3', height:33,borderRadius:20, paddingLeft:10,fontSize:12, marginTop:10, marginBottom:10, borderWidth:2, borderColor:'#fafafa'}}
        />
      </View>

    <View >
      {data.map((val) => (
        <TouchableOpacity 
        onPress={()=> usedispatch(componentAction.setcompoent(val, navigation))}
        key={val.id_model} style={{margin:4, width: 300, height:40, display:'flex',justifyContent:'center', alignItems:'center', backgroundColor:'#fafafa'}}>
          <Text>{val.component}</Text>
        </TouchableOpacity>
      ))}
    </View>

    </View>
  )

}

export const OptionSubAddSearch = {
  search:{
    title:"Search Component",
  }
}