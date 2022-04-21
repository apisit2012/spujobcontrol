import {  HTTP_LOGIN_FECTHING, HTTP_LOGIN_SUCCESS, HTTP_LOGIN_FAIL } from "../constant"

const initialState = {
    account:{
        id_emp:'2498',
        name:'apisit phunobthong',
        email:'po-apisit@umcth.com',
        levels:2,
    },
    isfetching:false,
    isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_LOGIN_FECTHING:
    return { ...state, isfetching:true, isError:false }

  case HTTP_LOGIN_SUCCESS:
    return { ...state, account:payload, isfetching:false, isError:false }

  case HTTP_LOGIN_FAIL:
     return { ...state, isfetching:false, isError:true }

  default:
    return state
  }
}
