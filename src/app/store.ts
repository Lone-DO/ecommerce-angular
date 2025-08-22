import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from './features/cart/store/cart.reducer';
import { toastReducer } from './features/toast/store/toast.reducer';
import { productReducer } from './features/products/store/product.reducer';
import { type iCartState } from './features/cart/models';
import { type iToastState } from './features/toast/models';
import { type iProductState } from './features/products/models';

export interface AppState {
  cart: iCartState;
  toast: iToastState;
  product: iProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  toast: toastReducer,
  product: productReducer,
};
