import {
  GET_META_DATA,
} from "../types";

export const getMetaData = (param) => {
  return {
    type: GET_META_DATA,
    payload: param,
  };
};
