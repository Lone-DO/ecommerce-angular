import {createReducer, on} from '@ngrx/store';
import {loadProducts, loadProductsFailure, loadProductsSuccess, Product} from './product.actions';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadProductsSuccess, (state, {products}) => ({
    ...state,
    products,
    loading: false,
    error: null
  })),

  on(loadProductsFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  }))
);
