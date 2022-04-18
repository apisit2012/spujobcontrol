import { HTTP_ACCOUNT_FAIL, HTTP_ACCOUNT_FETCHING, HTTP_ACCOUNT_SUCCESS } from "../constant"

const initialState = {
    account:{
        id_emp:'2498',
        name:'apisit phunobthong',
        email:'po-apisit@umcth.com',
        level:2,
    },
    isfetching:false,
    isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_ACCOUNT_FETCHING:
    return { ...state, isfetching:true, isError:false }

  case HTTP_ACCOUNT_SUCCESS:
    return { ...state, account:payload, isfetching:false, isError:false }

  case HTTP_ACCOUNT_FAIL:
     return { ...state, isfetching:false, isError:true }

  default:
    return state
  }
}
