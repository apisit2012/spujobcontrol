import { DASHBOARD_REFRESH, HTTP_DASHBOARD_FAIL, HTTP_DASHBOARD_FETCHING, HTTP_DASHBOARD_SUCCESS } from "../constant"

const initialState = {
    dashboard:{
      pending:{count:0},
      followapprove:{count:0},
      closejob:{count:0},
      total:{count:0},
    },
    
    isRefresh:false,
    isFetching:false,
    isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_DASHBOARD_FETCHING:
    return { ...state, isFetching:true, isError:false }

  case HTTP_DASHBOARD_SUCCESS:
    return { ...state, dashboard:payload, isFetching:false, isError:false }

  case HTTP_DASHBOARD_FAIL:
    return { ...state, isFetching:false, isError:true }

  case DASHBOARD_REFRESH:
      return { ...state, isRefresh:isRefresh ? false : true }

  default:
    return state
  }
}
