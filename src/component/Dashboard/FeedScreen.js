import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export default function FeedScreen({name, count, onChangeButton}) {

  const dashboardReducer = useSelector(({dashboardReducer}) => dashboardReducer);

  const [data] = React.useState(name)

  const conSelectDetail = async () =>{
    await onChangeButton(data)
  }

  return (
            <TouchableOpacity
              onPress={()=> conSelectDetail()}
              style={{borderRadius: 20,width: 73,height: 40, backgroundColor:'#fafafa',display: 'flex',justifyContent: 'center',alignItems: 'center',margin: 5}}>
              <Text style={{fontSize: 11, fontWeight: 'bold' }}>{name}</Text>               
              <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center', width:30}}>
                <MaterialCommunityIcons name={ name == "pending" 
                                              ?  "clipboard-clock"
                                              :  name == "review" 
                                              ?  "book-sync"
                                              :  name == "follow" 
                                              ?  "bell-plus"
                                              :  name == "closejob"
                                              ?  "book-check"
                                              :  "briefcase-check" }  color={ 
                                                                              name == "pending" 
                                                                              ?  "#A52A2A"
                                                                              :  name == "review" 
                                                                              ? "#6699FF"
                                                                              :  name == "follow" 
                                                                              ?  "#1E90FF"
                                                                              :  name == "closejob"
                                                                              ?  "#32CD32"
                                                                              :  "#FFA500"} />
              <Text style={{fontSize: 10, fontWeight: 'bold'}} >{count}</Text>
              </View>
            </TouchableOpacity>
  )
}