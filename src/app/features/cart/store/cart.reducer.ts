import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  removeFromCart,
  clearCart,
  restoreCart,
} from './cart.actions';
import { type iCartItem, type iCartState } from '../models';

export const initialState: iCartState = {
  items: [],
};

function filterItems(items: iCartItem[], target: iCartItem) {
  return items.filter((item) => item.id !== target.id);
}

export const cartReducer = createReducer(
  initialState,
  on(restoreCart, (state, { items }) => {
    return Array.isArray(items) ? { ...state, items } : state;
  }),
  on(addToCart, (state, { product, quantity }) => {
    const pendingRemoval = quantity !== undefined && quantity <= 0;
    if (pendingRemoval) {
      const items = filterItems(state.items, product as iCartItem);
      return { ...state, items };
    }

    let items = state.items;
    const index = state.items.findIndex((item) => item.id === product.id);

    if (index < 0) {
      items = [...state.items, { ...product, quantity: 1 }];
    } else {
      const updated = [...state.items];
      const target: iCartItem = state.items[index];
      updated[index] = {
        ...target,
        quantity: quantity || target.quantity + 1,
      };
      items = updated;
    }
    return { ...state, items };
  }),

  on(removeFromCart, (state, { product }) => {
    const items = filterItems(state.items, product as iCartItem);
    return { ...state, items };
  }),

  on(clearCart, (state) => ({
    ...state,
    items: [],
  }))
);
