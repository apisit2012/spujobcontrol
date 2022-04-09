import axios from 'axios'

import { HTTP_DASHBOARD_FAIL, HTTP_DASHBOARD_FETCHING, HTTP_DASHBOARD_SUCCESS, Server } from '../constant'


export const setStateToFetching = () => ({
  type: HTTP_DASHBOARD_FETCHING
})

export const setStateToSuccess = (payload) => ({
  type: HTTP_DASHBOARD_SUCCESS,
  payload
})

export const setStateToFail = () => ({
  type: HTTP_DASHBOARD_FAIL
})

export const renderpage_dashboard = (id_emp) => {
        return dispatch=> {
            dispatch(setStateToFetching())
            axios.post(Server.dashboard,id_emp).then(response=>{
                dispatch(setStateToSuccess(response.data.message))
            }).catch(err=> dispatch(setStateToFail()))
        }
}