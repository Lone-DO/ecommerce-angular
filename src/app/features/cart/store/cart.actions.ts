import { createAction, props } from '@ngrx/store';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{
    product: { id: number; name: string; price: number };
    quantity?: number;
  }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ product: { id: number; name: string; price: number } }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
