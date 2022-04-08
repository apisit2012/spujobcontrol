import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export default function FeedScreen({status}) {

  const dashboardReducer = useSelector(({dashboardReducer}) => dashboardReducer);

  return (
            <TouchableOpacity
              style={{borderRadius: 20,width: 85,height: 40, backgroundColor:'#fafafa',display: 'flex',justifyContent: 'center',alignItems: 'center',margin: 5}}>
              <Text style={{fontSize: 11, fontWeight: 'bold' }}>{status}</Text>
                <MaterialCommunityIcons name={ status == "pending" 
                                              ?  "clipboard-clock"
                                              :  status == "follow" 
                                              ?  "bell-plus"
                                              :  status == "closejob"
                                              ?  "book-check"
                                              :  "briefcase-check" }  color={ 
                                                                              status == "pending" 
                                                                              ?  "#A52A2A"
                                                                              :  status == "follow" 
                                                                              ?  "#1E90FF"
                                                                              :  status == "closejob"
                                                                              ?  "#32CD32"
                                                                              :  "#FFA500"} />
            </TouchableOpacity>
  )
}