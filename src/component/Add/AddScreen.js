
import React from 'react'
import { View, Text } from 'react-native'

import {useSelector, useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

export default function AddScreen() {

  const accountReducer = useSelector(({accountReducer}) => accountReducer);

  const [data, setData] = React.useState({
    id_jobtype: 1,
    id_model: null,
    id_line: 1,
    workorder: '5000',
    barc_rules: true,
    inspec_process: false,
    mach_documents: false,
    assem_documents: false,
    id_creater: accountReducer.account.id_emp,
    bom: null,
    xy_data: null,
    st_laser: null,
    use_bom: false,
    use_xy_data: false,
    use_st_lasermark: false,
    id_creater: accountReducer.account.id_emp,
  });


  return (
    <View>
      <Text>AddScreen</Text>
    </View>
  )
}