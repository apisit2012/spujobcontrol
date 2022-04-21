import axios from "axios";
import { AsyncStorage, Alert } from 'react-native'
import { HTTP_LOGIN_FAIL, HTTP_LOGIN_FECTHING, HTTP_LOGIN_SUCCESS, LOGIN, LOGOUT, Server } from "../constant";

export const setStateToFetching = () => ({
  type: HTTP_LOGIN_FECTHING,
})

export const setStateToSuccess = (payload) => ({
  type: HTTP_LOGIN_SUCCESS,
  payload
})

export const setStateToFail = () => ({
  type: HTTP_LOGIN_FAIL
})

export const setLOGIN = () => ({
  type: LOGIN
})

export const setLOGOUT = () => ({
  type: LOGOUT
})

export const login =  (data) => {
    return dispatch=>{
        dispatch(setStateToFetching())
        axios.post(Server.login,data).then(response=>{
            if (response.data.result == "OK"){
                AsyncStorage.setItem("token",response.data.token)
                dispatch(setStateToSuccess(response.data.data))
                dispatch(setLOGIN())
                Alert.alert("Information", "Hello "+response.data.data.name)

            } else {
              Alert.alert("Information","ID EMP Or Password Incorrect!!!")
            }
        }).catch(err=>{
          dispatch(setStateToFail())
        })
    }
}

export const logout = () => {
  return dispatch=>{
    AsyncStorage.removeItem("token")
    dispatch(setLOGOUT())
  }
}