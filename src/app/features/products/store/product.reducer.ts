import { createReducer, on } from '@ngrx/store';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  toggleView,
} from './product.actions';
import { type iProductState } from '../models';

export const initialState: iProductState = {
  products: [],
  view: 'grid',
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null,
  })),

  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(toggleView, (state) => {
    const view: 'grid' | 'list' = state.view === 'grid' ? 'list' : 'grid';
    return { ...state, view };
  })
);
