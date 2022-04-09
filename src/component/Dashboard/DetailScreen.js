import { View, Text, TouchableOpacity , Image} from 'react-native'
import React from 'react'

export default function DetailScreen({id_creter, create_date, type, compoent, status, no_event}) {
  return (
        <View style={{width: 380,height: 81,backgroundColor: '#fff',marginTop: 5,display: 'flex',justifyContent: 'space-between',alignItems: 'flex-start', borderColor:'#A52A2A', borderWidth:1}}>
          <TouchableOpacity style={{width: 380,height: 82,display: 'flex',justifyContent: 'flex-start',alignItems: 'flex-start'}}>
          <View style={{width: 380,display: 'flex',flexDirection: 'row',marginTop: 2,alignItems: 'center', justifyContent: 'space-between',paddingLeft: 5,paddingRight: 5}}>
                                      <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Image style={{width: 25,height: 25, borderRadius: 50,marginRight: 5}}
                                          source={{uri: `https://drive.umcth.co.th/img/employee/2498.jpg`}}
                                        />
                                        <View>
                                          <Text style={{fontWeight: 'bold'}}>55555</Text>
                                          <View
                                            style={{display: 'flex', flexDirection: 'row'}}>
                                            <Text style={{fontSize: 9, fontWeight: 'bold'}}>Create :</Text>
                                            <Text style={{fontSize: 9, fontWeight: 'bold'}}>555</Text>
                                          </View>
                                        </View>
                                      </View>
                                      <Text style={{fontSize: 12,display: 'flex',flexDirection: 'row',top: -7,fontWeight: 'bold'}}>555</Text>
                                    </View>
                                    {/* Body Post */}
                      <View style={{width: 382,height: 45,display: 'flex',flexDirection: 'row',marginTop: 2,justifyContent: 'flex-start',alignItems: 'center', paddingLeft: 5,paddingRight: 5,backgroundColor: '#FFF'}}>    
                   <Text style={{fontSize: 15, marginRight: 20}}> 5555</Text>
                <Text style={{fontSize: 12}}>5555</Text>
             </View>
          </TouchableOpacity>
      </View>
  )
}