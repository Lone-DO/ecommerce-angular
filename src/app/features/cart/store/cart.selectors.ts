import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type iCartState } from '../models';

export const selectCartState = createFeatureSelector<iCartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: iCartState) => state.items
);

export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);
