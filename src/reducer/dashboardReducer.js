import { HTTP_DASHBOARD_FETCHING } from "../constant"

const initialState = {
    dashboard:[],
    isFetching:false,
    isError:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case HTTP_DASHBOARD_FETCHING:
    return { ...state, isFetching:true, isError:false }

  default:
    return state
  }
}
