import {
  FETCH_PRODUCTLIST_REQUEST,
  FETCH_PRODUCTLIST_SUCCESS,
  FETCH_PRODUCTLIST_FAILURE,
  FETCH_PAGINATION_SUCCESS,
  FETCH_PAGINATION_REQUEST,
  FETCH_PAGINATION_FAILURE,
} from "../types";

const initialState = {
  loading: false,
  loadmore: false,
  productList: [],
  totalProduct: 0,
  error: "",
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTLIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTLIST_SUCCESS:
      return {
        ...state,
        productList: action.payload.list,
        totalProduct: action.payload.total_record,
        loading: false,
      };
    case FETCH_PRODUCTLIST_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case FETCH_PAGINATION_REQUEST:
      return { ...state, loadmore: true };
    case FETCH_PAGINATION_SUCCESS:
      return {
        ...state,
        productList: [...state.productList, ...action.payload.list],
        loadmore: false,
      };
    case FETCH_PAGINATION_FAILURE:
      return { ...state, error: action.payload, loadmore: false };
    default:
      return state;
  }
};

export default productListReducer;
