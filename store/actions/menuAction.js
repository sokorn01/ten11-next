import { serviceApiFormData } from "../../shared/hooks/seviceApi";
import {
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
  SAVE_MENU
} from "../types";

var service = serviceApiFormData();


export const fetchMenu = () => {
  return (dispatch) => {
    dispatch(fetchMenuRequest());
    service
      .post("MenuApp/getMenu")
      .then((response) => {
        console.log(response)
        console.log(dispatch)
        dispatch({ type: FETCH_MENU_SUCCESS, payload: response.data.menu });
        // dispatch(fetchMenuSuccess(response.data.menu));
      })
      .catch((error) => {
        dispatch(fetchMenuFailure(error.message));
      });
  };
};

export const saveMenu = (param) => {
  return {
    type: SAVE_MENU,
    payload: param,
  };
};


export const fetchMenuRequest = () => {
  return {
    type: FETCH_MENU_REQUEST,
  };
};

export const fetchMenuSuccess = (param) => {
  return {
    type: FETCH_MENU_SUCCESS,
    payload: param,
  };
};

export const fetchMenuFailure = (error) => {
  return {
    type: FETCH_MENU_FAILURE,
    payload: error,
  };
};
