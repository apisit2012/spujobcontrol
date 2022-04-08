import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function PostScreen({navigation}) {
  return (
           <View style={{width: 391,height: 55,display: 'flex',justifyContent: 'flex-start',alignItems: 'center',flexDirection: 'row',backgroundColor:'#fafafa'}}>
              <Image style={{width: 35,height: 35,borderRadius: 50,marginLeft: 10, marginRight: 10,}}source={{uri: `https://drive.umcth.co.th/img/employee/2498.jpg`}}/>
                <TouchableOpacity
                     onPress={() => navigation.navigate('reportSubDashboard')}>
                <Text>I When To Create Report</Text>
             </TouchableOpacity>
           </View>
  )
}