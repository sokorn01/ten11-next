import { GET_META_DATA } from "../types";

const initialState = {
  metaData: [],
};

const metaDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_META_DATA:
      return { ...state, metaData: action.payload };
    default:
      return state;
  }
};

export default metaDataReducer;
