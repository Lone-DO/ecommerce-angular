import {createReducer, on} from '@ngrx/store';
import {addToCart, CartItem, clearCart} from './cart.actions';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {product}) => {
    const existingItem = state.items.find(item => item === product);

    if (existingItem) {
      existingItem.quantity += 1;
      return state;
    } else {
      state.items.push({...product, quantity: 1});
      return state;
    }
  }),

  on(clearCart, (state) => ({
    ...state,
    items: []
  })),
);
