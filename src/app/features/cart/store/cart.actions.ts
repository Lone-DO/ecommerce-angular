import { createAction, props } from '@ngrx/store';

/** TODO: Using Redux Dev Tools, It does not appear as though the logs are being registered as intended?
 * Perhaps unrelated due to current tooling and dependencies
 */
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
