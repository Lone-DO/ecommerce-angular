import { createReducer, on } from '@ngrx/store';
import { addToCart, CartItem, clearCart } from './cart.actions';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    let items = state.items;
    const index = state.items.findIndex((item) => item.id === product.id);

    if (index < 0) {
      items = [...state.items, { ...product, quantity: 1 }];
    } else {
      const updated = [...state.items];
      const target: CartItem = state.items[index];
      /** Add Argument for reducing or increasing quantity */
      updated[index] = { ...target, quantity: target.quantity + 1 };
      items = updated;
    }
    return { ...state, items };
  }),

  on(clearCart, (state) => ({
    ...state,
    items: [],
  }))
);
