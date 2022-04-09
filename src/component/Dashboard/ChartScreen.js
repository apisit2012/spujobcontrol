import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export default function ChartScreen() {
  return (
    <View style={{width: 390,height: 150,backgroundColor: '#fff',marginTop: 5,marginBottom: 3}}>
                        <View style={{display: 'flex', flexDirection: 'row',width: 390,justifyContent: 'center',alignItems: 'center'}}>
                          <View>
                            <Text>Monthly Chart</Text>
                          </View>
                          <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                            <MaterialCommunityIcons
                              name="chart-timeline-variant"
                              color="#32CD32"
                              size={14}
                            />
                            <Text>Close Job</Text>
                          </View>
                          <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                            <MaterialCommunityIcons
                              name="chart-timeline-variant"
                              color="#FFA500"
                              size={14}
                            />
                            <Text>Tatal</Text>
                          </View>
      </View>
    </View>
  )
}