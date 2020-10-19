import {
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
  SAVE_MENU
} from "../types";

const initialState = {
  loading: false,
  menuData: [],
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU_REQUEST:
      return { ...state, loading: true };
    case FETCH_MENU_SUCCESS:
      return { ...state, menuData: action.payload, loading: false };
    case FETCH_MENU_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case SAVE_MENU:
      return { ...state, menuData: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
