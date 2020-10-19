import { serviceApiFormData } from "../../shared/hooks/seviceApi";
import {
  FETCH_PRODUCTLIST_REQUEST,
  FETCH_PRODUCTLIST_SUCCESS,
  FETCH_PRODUCTLIST_FAILURE,
  FETCH_PAGINATION_SUCCESS,
  FETCH_PAGINATION_REQUEST,
  FETCH_PAGINATION_FAILURE,
} from "../types";

export const fetchProductList = (param) => {
  const api = serviceApiFormData();
  return (dispatch) => {
    dispatch(fetchProductListRequest());
    const data = {
      page: param.page,
      category_id: param.categoryId,
    };
    api
      .post("ListProduct/getProductList", data)
      .then((response) => {
        dispatch(fetchProductListSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductListFailure(error.message));
      });
  };
};

export const fetchPagination = (param) => {
  const api = serviceApiFormData();
  return (dispatch) => {
    dispatch(fetchPaginationRequest());
    const data = {
      page: param.page,
      category_id: param.categoryId,
    };
    api
      .post("ListProduct/getProductList", data)
      .then((response) => {
        dispatch(fetchPaginationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPaginationFails(error.message));
      });
  };
};

export const fetchProductListRequest = () => {
  return {
    type: FETCH_PRODUCTLIST_REQUEST,
  };
};

export const fetchProductListSuccess = (param) => {
  return {
    type: FETCH_PRODUCTLIST_SUCCESS,
    payload: param,
  };
};

export const fetchProductListFailure = (error) => {
  return {
    type: FETCH_PRODUCTLIST_FAILURE,
    payload: error,
  };
};

export const fetchPaginationRequest = () => {
  return {
    type: FETCH_PAGINATION_REQUEST,
  };
};

export const fetchPaginationSuccess = (param) => {
  return {
    type: FETCH_PAGINATION_SUCCESS,
    payload: param,
  };
};

export const fetchPaginationFails = (error) => {
  return {
    type: FETCH_PAGINATION_FAILURE,
    payload: error,
  };
};
