import axios from 'axios'

import { DASHBOARD_REFRESH, HTTP_DASHBOARD_FAIL, HTTP_DASHBOARD_FETCHING, HTTP_DASHBOARD_SUCCESS, Server } from '../constant'


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

export const setStateToDashboardRefresh = () => ({
  type: DASHBOARD_REFRESH,
})


export const renderpage_dashboard = (id_emp) => {
        return dispatch=> {
            dispatch(setStateToFetching())
            axios.post(Server.dashboard,id_emp).then(response=>{
                dispatch(setStateToSuccess(response.data.message))
            }).catch(err=> dispatch(setStateToFail()))
        }
}

export const setRefreshDashboard = () => {
  return dispatch=> {
    dispatch(setStateToDashboardRefresh())
}
}