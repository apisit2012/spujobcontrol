import { SETCOMPONENT } from "../constant"

const initialState = {
    component:{
      id_model:1,
      component:''
    }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SETCOMPONENT:
    return { ...state, component:payload }

  default:
    return state
  }
}
