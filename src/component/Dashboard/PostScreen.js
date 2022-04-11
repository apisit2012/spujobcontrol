import { View, Text, TouchableOpacity , Image} from 'react-native'
import React from 'react'

export default function PostScreen({id_creater, create_date, name_jobtype, component, status, no_event, id_status_flow, name, onPressDetail, id_event}) {

  const [data] = React.useState(id_event)

  const CheckDetail =async () => {
    await onPressDetail(data)
  }

  return (
        <View style={
          id_status_flow == 1 
          ? {width: 420,height: 81,backgroundColor: '#fff',marginTop: 5,display: 'flex',justifyContent: 'space-between',alignItems: 'flex-start', borderColor:'#A52A2A', borderWidth:1}
          : id_status_flow == 2
          ? {width: 420,height: 81,backgroundColor: '#fff',marginTop: 5,display: 'flex',justifyContent: 'space-between',alignItems: 'flex-start', borderColor:'#6699FF', borderWidth:1}
          : id_status_flow == 3
          ? {width: 420,height: 81,backgroundColor: '#fff',marginTop: 5,display: 'flex',justifyContent: 'space-between',alignItems: 'flex-start', borderColor:'#1E90FF', borderWidth:1}
          : id_status_flow == 4
          ? {width: 420,height: 81,backgroundColor: '#fff',marginTop: 5,display: 'flex',justifyContent: 'space-between',alignItems: 'flex-start', borderColor:'#32CD32', borderWidth:1}
          : id_status_flow == 5
          ? {width: 420,height: 81,backgroundColor: '#fff',marginTop: 5,display: 'flex',justifyContent: 'space-between',alignItems: 'flex-start', borderColor:'#A52A2A', borderWidth:1}
          : {width: 420,height: 81,backgroundColor: '#fff',marginTop: 5,display: 'flex',justifyContent: 'space-between',alignItems: 'flex-start', borderColor:'#FFA500', borderWidth:1}

        }>
          <TouchableOpacity 
          onPress={()=>CheckDetail()}
          style={{width: 420,height: 82,display: 'flex',justifyContent: 'flex-start',alignItems: 'flex-start'}}>
          <View style={{width: 420,display: 'flex',flexDirection: 'row',marginTop: 2,alignItems: 'center', justifyContent: 'space-between',paddingLeft: 5,paddingRight: 5}}>
                                      <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Image style={{width: 25,height: 25, borderRadius: 50,marginRight: 5}}
                                          source={{uri: `https://drive.umcth.co.th/img/employee/${id_creater}.jpg`}}
                                        />
                                        <View>
                                          <Text style={{fontWeight: 'bold'}}>{name}</Text>
                                          <View
                                            style={{display: 'flex', flexDirection: 'row'}}>
                                            <Text style={{fontSize: 9, fontWeight: 'bold'}}>Create :</Text>
                                            <Text style={{fontSize: 9, fontWeight: 'bold'}}>{create_date}</Text>
                                          </View>
                                        </View>
                                      </View>
                                      <Text style={{fontSize: 12,display: 'flex',flexDirection: 'row',top: -7,fontWeight: 'bold'}}>{ id_status_flow == 1 
                                                                                                                                    ? "pending"
                                                                                                                                    : id_status_flow == 2
                                                                                                                                    ? "review" 
                                                                                                                                    : id_status_flow == 3
                                                                                                                                    ? "approve" 
                                                                                                                                    : id_status_flow == 4
                                                                                                                                    ? "closejob" 
                                                                                                                                    : "Reject" }</Text>
                                    </View>
                                    {/* Body Post */}
                      <View style={{width: 382,height: 45,display: 'flex',flexDirection: 'row',marginTop: 2,justifyContent: 'flex-start',alignItems: 'center', paddingLeft: 5,paddingRight: 5,backgroundColor: '#FFF'}}>    
                   <Text style={{fontSize: 15, marginRight: 20}}>{name_jobtype}</Text>
                <Text style={{fontSize: 12}}>{component}</Text>
             </View>
          </TouchableOpacity>
      </View>
  )
}