import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, CartItem, clearCart } from './cart.actions';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

function filterItems(items: CartItem[], target: CartItem) {
  return items.filter((item) => item.id !== target.id);
}

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product, quantity }) => {
    const pendingRemoval = quantity !== undefined && quantity <= 0;
    if (pendingRemoval) {
      const items = filterItems(state.items, product as CartItem);
      return { ...state, items };
    }

    let items = state.items;
    const index = state.items.findIndex((item) => item.id === product.id);

    if (index < 0) {
      items = [...state.items, { ...product, quantity: 1 }];
    } else {
      const updated = [...state.items];
      const target: CartItem = state.items[index];
      updated[index] = {
        ...target,
        quantity: quantity || target.quantity + 1,
      };
      items = updated;
    }
    return { ...state, items };
  }),

  on(removeFromCart, (state, { product }) => {
    const items = filterItems(state.items, product as CartItem);
    return { ...state, items };
  }),

  on(clearCart, (state) => ({
    ...state,
    items: [],
  }))
);
