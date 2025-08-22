import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { type AppState } from '../../../store';
import {
  addToCart,
  clearCart,
  removeFromCart,
  restoreCart,
} from './cart.actions';
import { selectCartItems, selectCartTotal } from './cart.selectors';
import { type iCartItem } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartCoordinator {
  constructor(private store: Store<AppState>) {}

  selectCartItems$(): Observable<iCartItem[]> {
    return this.store.select(selectCartItems);
  }

  selectCartTotal$(): Observable<number> {
    return this.store.select(selectCartTotal);
  }

  restoreCart(items: iCartItem[]): void {
    this.store.dispatch(restoreCart({ items }));
  }
  addToCart(
    product: { id: number; name: string; price: number },
    quantity?: number
  ): void {
    this.store.dispatch(addToCart({ product, quantity }));
  }

  removeFromCart(product: { id: number; name: string; price: number }): void {
    this.store.dispatch(removeFromCart({ product }));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }
}
