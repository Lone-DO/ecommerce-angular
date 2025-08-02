import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { type AppState } from '../../../store';
import { addToCart, CartItem, clearCart, removeFromCart } from './cart.actions';
import { selectCartItems, selectCartTotal } from './cart.selectors';

@Injectable({
  providedIn: 'root',
})
export class CartCoordinator {
  constructor(private store: Store<AppState>) {}

  selectCartItems$(): Observable<CartItem[]> {
    return this.store.select(selectCartItems);
  }

  selectCartTotal$(): Observable<number> {
    return this.store.select(selectCartTotal);
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
