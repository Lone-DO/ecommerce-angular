import { ActionReducerMap } from '@ngrx/store';
import { cartReducer, CartState } from './features/cart/store/cart.reducer';
import {
  productReducer,
  ProductState,
} from './features/products/store/product.reducer';

export interface AppState {
  cart: CartState;
  product: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  product: productReducer,
};
