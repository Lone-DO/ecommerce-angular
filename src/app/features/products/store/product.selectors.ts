import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type iProductState } from '../models';

export const selectProductState =
  createFeatureSelector<iProductState>('product');

export const selectAllProducts = createSelector(
  selectProductState,
  (state: iProductState) => state.products
);

export const selectProductsView = createSelector(
  selectProductState,
  (state: iProductState) => state.view
);

export const selectProductsLoading = createSelector(
  selectProductState,
  (state: iProductState) => state.loading
);

export const selectProductsError = createSelector(
  selectProductState,
  (state: iProductState) => state.error
);
