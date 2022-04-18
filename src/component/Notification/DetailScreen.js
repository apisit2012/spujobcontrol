import { View, Text , Image, TouchableOpacity, TextInput, Alert} from 'react-native'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Server } from '../../constant';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import * as dashboardAction from '../../action/dashboardAction'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';

export default  function DetailScreen({navigation,route}) {

  const accountReducer = useSelector(({accountReducer}) => accountReducer);
  const [button, setButton] = React.useState('')
  const [data, setData] = React.useState(route.params.result[0])
  const [dates, setDates] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState();
  const [userAssing, setUserAssing] = React.useState([]);

  const usedispatch = useDispatch()


  const fetchAssing = () => {
    axios.post(Server.searchAssign).then(response=>{
      setUserAssing(response.data.message)
    })
  }


  React.useEffect(()=>{
    fetchAssing()
    setData({...data, id_emp:accountReducer.account.id_emp, emp_assign:accountReducer.account.id_emp})
    route.params.result[0].bom != 'null'
    ? setData({...data,use_bom:true})

    : route.params.result[0].xy_data != 'null'
    ? setData({...data,use_xy_data:true})

    : route.params.result[0].st_laser != 'null'
    ? setData({...data,use_st_lasermark:true})

    : data

  },[])

  const onChange = async (bt) => {
    let api;
    await bt
      bt == 'edit'
    ? api = Server.reviewEvent
    : bt == 'review'
    ? api = Server.reviewEvent
    : bt == 'approve'
    ? api = Server.approveEvent
    : bt == 'closejob'
    ? api = Server.closejobEvent
    : "ooo"

    setData({...data, id_emp:accountReducer.account.id_emp, emp_assign:accountReducer.account.id_emp})

    axios.post(api,data).then(response=>{
      response.data.result == "OK"
      ? Alert.alert("OK","บันทึกข้อมูลสำเร็จ")
      : Alert.alert("Fail","ผิดพลาด")
      usedispatch(dashboardAction.renderpage_dashboard())
      navigation.goBack()
    })
  }


  // Button

  const ButtonEdit = () => (
    <TouchableOpacity
    onPress={()=>onChange("edit")}
      style={{width:50, height: 30, borderRadius: 50, backgroundColor:'#CC00FF', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#fff', fontWeight:'bold', fontSize:12}} >Edit</Text>
   </TouchableOpacity>
  )

  const ButtonReview = () => (
    <TouchableOpacity
    onPress={()=>onChange("review")}
      style={{width:50, height: 30, borderRadius: 50, backgroundColor:'#6699FF', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#fff', fontWeight:'bold', fontSize:12}} >Review</Text>
   </TouchableOpacity>
  )
  const ButtonApprove = () => (
    <TouchableOpacity
    onPress={()=>onChange("approve")}
     style={{width:50, height: 30, borderRadius: 50, backgroundColor:'#009900', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#fff', fontWeight:'bold', fontSize:12}} >Approve</Text>
    </TouchableOpacity>
  )

  const ButtonClosejbo = () => (
    <TouchableOpacity
    onPress={()=>onChange("closejob")}
     style={{width:50, height: 30, borderRadius: 50, backgroundColor:'#00AA00', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#fff', fontWeight:'bold', fontSize:12}} >Closejob</Text>
    </TouchableOpacity>
  )
  const ButtonReject = () => (
    <TouchableOpacity
    onPress={()=>onChange("reject")}
     style={{width:50, height: 30, borderRadius: 50, backgroundColor:'#FF6633', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#fff', fontWeight:'bold', fontSize:12}} >Reject</Text>
    </TouchableOpacity>
  )


  return (
    <View style={{display: 'flex',height:700, backgroundColor: '#d4d4d4', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
        <View style={{width: 415, height: 70, backgroundColor: '#fafafa', marginTop: 5, direction: 'flex', justifyContent: 'flex-start',alignItems: 'center'}}>

          {/* Header */}

          <View style={{width: 415,height: 70,display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'stretch', backgroundColor:'#d2d2d2'}}>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', width: 210, height: 70, backgroundColor:'#fafafa'}}>
              <Image style={{width: 37,height: 37,borderRadius: 50,marginLeft: 10, marginRight: 10,}}
              source={{uri: `https://drive.umcth.co.th/img/employee/${accountReducer.account.id_emp}.jpg`}}/>
                <View >
                    <Text style={{fontSize:11,fontWeight:'bold'}}>{accountReducer.account.name}</Text>
                </View>
              </View>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', width: 200, height: 70, backgroundColor:'#fafafa'}}>

                    {accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 1
                     ? <ButtonEdit />
                     : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 2
                     ? <ButtonEdit />
                     : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 3
                     ? <ButtonEdit />
                     : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 4
                     ? <View></View>
                     : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 5
                     ? <View></View>
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 1
                     ? <ButtonEdit />
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 2
                     ? <ButtonEdit />
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 3
                     ? <ButtonEdit />
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 4
                     ? <View></View>
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 5
                     ? <View></View>
                     : <View></View>
                    }

                      {accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 1
                     ? <View></View>
                     : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 2
                     ? <View></View>
                     : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 3
                     ? <View></View>
                     : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 4
                     ? <View></View>
                     : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 5
                     ? <View></View>
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 1
                     ? <ButtonReject />
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 2
                     ? <ButtonReject />
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 3
                     ? <View></View>
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 4
                     ? <View></View>
                     : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 5
                     ? <View></View>
                     : <View></View>
                    }



                    {   accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 1
                      ? <ButtonReview />
                      : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 2
                      ? <View></View>
                      : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 3
                      ? <ButtonClosejbo />
                      : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 4
                      ? <View></View>
                      : accountReducer.account.level == 1 && route.params.result[0].id_status_flow == 5
                      ? <View></View>
                      : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 1
                      ? <ButtonApprove />
                      : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 2
                      ? <ButtonApprove />
                      : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 3
                      ? <ButtonClosejbo />
                      : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 4
                      ? <View></View>
                      : accountReducer.account.level == 2 && route.params.result[0].id_status_flow == 5
                      ? <View></View>
                      : <View></View>
                    } 
              </View>
          </View>
            
        </View>
        <View style={{width: 415, height: 600, backgroundColor: '#fafafa', marginTop: 5, direction: 'flex', justifyContent: 'flex-start',alignItems: 'center'}}>



          {/* Body */}
          <View style={{width: 380, height: 20, display:'flex',justifyContent:'flex-start',flexDirection:'row'}}>
            <Text style={{fontWeight:'bold'}}>Status : </Text>
          <Text>{ route.params.result[0].id_status_flow == 1
                ? "Pending"
                : route.params.result[0].id_status_flow == 2
                ? "Review"
                : route.params.result[0].id_status_flow == 3
                ? "Approve"
                : route.params.result[0].id_status_flow == 4
                ? "Close Job"
                : "Reject"}</Text>
          </View>

          <View style={{width: 380, height: 20, display:'flex',justifyContent:'flex-start',flexDirection:'row'}}>
           <Text style={{fontWeight:'bold'}}>Create : </Text>
            <Text>{route.params.result[0].name}</Text>
          </View>

          
          <View style={{width: 380, height: 20, display:'flex',justifyContent:'flex-start',flexDirection:'row'}}>
           <Text style={{fontWeight:'bold'}}>Date : </Text>
            <Text>{route.params.result[0].create_date}</Text>
          </View>

          <View style={{marginTop:10}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Comment</Text>
              <TextInput  
              value={data.comment}  
              onChangeText={e=> setData({...data,comment:e})} 
              multiline={true}
              numberOfLines={4}
              underlineColorAndroid="transparent"
                style={{borderWidth:.5, width: 380, height:100, textAlignVertical: 'top'}}/>
            </View>

            <View style={{marginTop:20,width: 380, display:'flex',justifyContent:'flex-start',flexDirection:'row', height:50}}>

              {accountReducer.account.level == 2 &&( route.params.result[0].id_status_flow == 1 || route.params.result[0].id_status_flow == 2)
              ?(
                  <View style={{display:'flex',flexDirection:'row', height:50}}>
                  <Text style={{fontSize:13, fontWeight:'bold', top:17}}>Assign To : </Text>
                  <Picker
                      selectedValue={data.assign_to}
                      style={{width:255, height:30, borderWidth:1}}
                      onValueChange={(itemValue, itemIndex) =>
                        setData({...data, assign_to: itemValue})
                      }>
                      {userAssing.map((value, index) => (
                        <Picker.Item
                          label={value.name}
                          value={value.id_emp}
                          key={index}
                          style={{fontSize:13}}
                        />
                      ))}
                    </Picker>
                </View>
              ) : <View style={{display:'flex',flexDirection:'row', height:50}}></View>
              }   
            </View>

            <View style={{width: 380, marginTop:30, display:'flex', justifyContent:'flex-start',alignItems:'flex-start'}}>
              <Text style={{fontSize:15, fontWeight:'bold'}}>Detail</Text>


                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:13, fontWeight:'bold'}}>Type : </Text>
                  <Text >{route.params.result[0].name_jobtype}</Text>
                </View>
                
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:13, fontWeight:'bold'}}>Component : </Text>
                  <Text >{route.params.result[0].component}</Text>
                </View>

                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:13, fontWeight:'bold'}}>Work Order : </Text>
                  <Text >{route.params.result[0].workorder}</Text>
                </View>

                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:13, fontWeight:'bold'}}>Line : </Text>
                  <Text >{route.params.result[0].name_line}</Text>
                </View>


                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:13, fontWeight:'bold'}}>Date Bom : </Text>
                  <Text >{route.params.result[0].bom == 'null' ? "" : route.params.result[0].bom}</Text>
                </View>

                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:13, fontWeight:'bold'}}>Date XY Data : </Text>
                  <Text >{route.params.result[0].xy_data == 'null' ? "" : route.params.result[0].xy_data}</Text>
                </View>

                <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{fontSize:13, fontWeight:'bold'}}>Date Detail Laser Mark : </Text>
                  <Text >{route.params.result[0].st_laser == 'null' ? "" : route.params.result[0].st_laser}</Text>
                </View>

            </View>


            {/* Date Bom */}
            <View style={{marginTop:10}}></View>
            <DatePicker
            modal
            mode="date"
            open={open}
            date={dates}
            onConfirm={dates => {
              setOpen(false);
              if (select.select == 'bom') {
                setData({...data, bom: dates.toISOString().split('T')[0]});
              } else if (select.select == 'xy-data') {
                setData({...data, xy_data: dates.toISOString().split('T')[0]});
              } else {
                setData({
                  ...data,
                  st_laser: dates.toISOString().split('T')[0],
                });
              }
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

            
            <View style={{width:380, height: 30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={data.use_bom
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>Bom : </Text>
              <Text style={
                data.use_bom
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>{data.bom == "null" ? " " : data.bom}</Text>
              <MaterialCommunityIcons name="calendar-month" color={
                  data.use_bom
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}} 
                  onPress={()=>{
                    setSelect({select:'bom'})
                    setOpen({open:true})
                  }}
                  />
              <MaterialCommunityIcons name={
                data.use_bom
                ? "check-circle"
                : "checkbox-blank-circle-outline" } color={
                  data.use_bom
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}}
              onPress={()=> data.use_bom ? setData({...data,use_bom:false}) : setData({...data,use_bom:true}) }
              />
            </View>

            <View style={{width:380, height: 30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={data.use_xy_data
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>XY-Data : </Text>
              <Text style={
                data.use_xy_data
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>{data.xy_data == "null" ? " " : data.xy_data}</Text>
              <MaterialCommunityIcons name="calendar-month" color={
                  data.use_xy_data
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}} 
                  onPress={()=>{
                    setSelect({select:'xy-data'})
                    setOpen({open:true})
                  }}
                  />
              <MaterialCommunityIcons name={
                data.use_xy_data
                ? "check-circle"
                : "checkbox-blank-circle-outline" } color={
                  data.use_xy_data
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}}
              onPress={()=> data.use_xy_data ? setData({...data,use_xy_data:false}) : setData({...data,use_xy_data:true}) }
              />
            </View>

            <View style={{width:380, height: 30, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Text style={data.use_st_lasermark
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>Laser mark : </Text>
              <Text style={
                data.use_st_lasermark
                ? {fontWeight:'bold', width:100, color: "#00cc00"}
                : {fontWeight:'bold', width:100, color: "#d3d3d3"}}>{data.st_laser == "null" ? " " : data.st_laser}</Text>
              <MaterialCommunityIcons name="calendar-month" color={
                  data.use_st_lasermark
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}} 
                  onPress={()=>{
                    setSelect({select:'st_lasermark'})
                    setOpen({open:true})
                  }}
                  />
              <MaterialCommunityIcons name={
                data.use_st_lasermark
                ? "check-circle"
                : "checkbox-blank-circle-outline" } color={
                  data.use_st_lasermark
                  ? "#00cc00"
                  : "#d3d3d3" } size={20} style={{width: 20}}
              onPress={()=> data.use_st_lasermark ? setData({...data,use_st_lasermark:false}) : setData({...data,use_st_lasermark:true}) }
              />
            </View>


          </View >
    </View>
  )
}