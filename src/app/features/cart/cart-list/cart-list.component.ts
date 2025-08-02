import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../store/cart.actions';
import { CartCoordinator } from '../store/cart.coordinator';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
  items: CartItem[] = [];
  total$: Observable<number> = of(0);

  constructor(private cartCoordinator: CartCoordinator) {
    this.total$ = this.cartCoordinator.selectCartTotal$();
    this.cartCoordinator.selectCartItems$().subscribe((items) => {
      this.items = items;
    });
  }

  clearCart(): void {
    this.cartCoordinator.clearCart();
  }

  updateItem(product: CartItem, mode: 'increment' | 'decrement') {
    const quantity = product.quantity + (mode === 'decrement' ? -1 : 1);
    if (quantity) return this.cartCoordinator.addToCart(product, quantity);
    return this.cartCoordinator.removeFromCart(product);
  }

  buyNow(): void {
    // Implement your checkout logic here
    alert('Thank you. Your checkout was completed successfully.');
    this.clearCart();
  }
}
