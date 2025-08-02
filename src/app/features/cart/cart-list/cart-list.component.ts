import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { CartItem } from '../store/cart.actions';
import { CartCoordinator } from '../store/cart.coordinator';
import { ToastCoordinator } from '../../toast/store/toast.coordinator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
  cart$$: Subscription | undefined;
  items: CartItem[] = [];
  total$: Observable<number> = of(0);

  constructor(
    private cartCoordinator: CartCoordinator,
    private toastCoordinator: ToastCoordinator,
    private router: Router
  ) {
    this.total$ = this.cartCoordinator.selectCartTotal$();
    this.cart$$ = this.cartCoordinator.selectCartItems$().subscribe((items) => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    this.cart$$?.unsubscribe();
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
    /** TODO: Set a BUSY state to indicate that the page is thinking would help inform user something is happening */
    this.toastCoordinator.addMessage({
      message: 'Thank you. Your checkout was completed successfully.',
      mode: 'success',
    });
    this.clearCart();
    setTimeout(() => this.router.navigate(['/']), 3000);
  }
}
