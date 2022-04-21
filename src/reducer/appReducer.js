import { LOGIN, LOGOUT } from "../constant"

const initialState = {
    isLoggedIn:false
}

export default (state = initialState, { type }) => {
  switch (type) {

  case LOGIN:
    return { ...state, isLoggedIn:true }

  case LOGOUT:
    return { ...state, isLoggedIn:false }

  default:
    return state
  }
}
