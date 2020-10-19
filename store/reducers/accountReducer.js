import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  userData: [],
  error: "",
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return { ...state, loading: true };
    case FETCH_LOGIN_SUCCESS:
      return { ...state, userData: action.payload, loading: false };
    case FETCH_LOGIN_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default accountReducer;
