import { SETCOMPONENT } from "../constant";

export const setComponent = (payload) => ({
  type: SETCOMPONENT,
  payload
})

export const setcompoent = (component, navigation) => {
    return (dispatch) => {
        dispatch(setComponent(component))
        navigation.goBack();
    }
}
