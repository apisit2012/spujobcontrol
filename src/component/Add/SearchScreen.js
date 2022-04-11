import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchScreen({navigation, route}) {

  const [component, setComponent] = React.useState([route.params.data])
  const [search, setSerach] = React.useState('')
  const [data, setData] = React.useState([])

  const searchdata = () => {
    const result = component.filter((val) => val.component == search )
    setData([result])
  }

  React.useEffect(()=>{
    searchdata()
  },[search])


  return (
    <View style={{flex:1}}>
      {data.map((val, index) => (
        <View>
          <Text>555555555555555</Text>
        </View>
      ))}
    </View>
  )
}

export const OptionSubAddSearch = {
  search:{
    title:"Search Component",
    headerRight: () => (
      <View>
        <MaterialCommunityIcons name="magnify" size={25} />
      </View>
    )
  }
}