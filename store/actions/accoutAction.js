import { serviceApi, serviceApiFormData } from "../../shared/hooks/seviceApi";
import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
} from "../types";

export const fetchLogin = (param) => {
  const api = serviceApi();
  return (dispatch) => {
    dispatch({
      type: FETCH_LOGIN_REQUEST,
    });
    const data = {
      username: param.email,
      password: param.password,
    };
    api
      .post("login", data)
      .then((response) => {
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: response.data.access_token,
            refreshToken: response.data.refresh_token,
            expiration: new Date(
              new Date().getTime() + (response.data.expires_in / 6) * 60 * 60
            ),
          })
        );
        dispatch(fetchLoginSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            dispatch(fetchLoginFailure("Username or password is incorrect!"));
          } else if (error.response.status === 403) {
            dispatch(fetchLoginFailure("Please contact adminitrator !"));
          }
        } else {
          console.log("Error", error.message);
          dispatch(fetchLoginFailure(error.message));
        }
      });
  };
};

export const fetchRefreshToken = (callBack) => {
  const apiFormData = serviceApiFormData();
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    const formData = new FormData();
    formData.append("grant_type", "refresh_token");
    formData.append("refresh_token", token.refreshToken);
    apiFormData
      .post("oauth/access_token", formData)
      .then((response) => {
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: response.data.access_token,
            refreshToken: response.data.refresh_token,
            expiration: new Date(
              new Date().getTime() +
                ((response.data.expires_in * 5) / 18) * 60 * 60
            ),
          })
        );
        dispatch(callBack());
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch(fetchLoginFailure(error.message));
        return false;
      });
  };
};

export const logoutHandler = () => {
  localStorage.removeItem("token");
};

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};

export const fetchLoginSuccess = (param) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: param,
  };
};

export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  };

  
};
