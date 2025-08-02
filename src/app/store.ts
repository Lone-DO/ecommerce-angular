import { ActionReducerMap } from '@ngrx/store';
import { cartReducer, CartState } from './features/cart/store/cart.reducer';
import {
  productReducer,
  ProductState,
} from './features/products/store/product.reducer';
import { toastReducer, ToastState } from './features/toast/store/toast.reducer';

export interface AppState {
  cart: CartState;
  toast: ToastState;
  product: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  product: productReducer,
  toast: toastReducer,
};
