import {ActionReducerMap} from '@ngrx/store';
import {cartReducer, CartState} from './cart/cart.reducer';
import {productReducer, ProductState} from './product/product.reducer';

export interface AppState {
  cart: CartState;
  product: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  product: productReducer
};
