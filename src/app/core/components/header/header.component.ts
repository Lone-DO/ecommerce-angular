import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { type iCartItem } from '../../../features/cart/models';
import { CartCoordinator } from '../../../features/cart/store/cart.coordinator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  cart$$: Subscription | undefined;
  cartItems: iCartItem[] = [];

  constructor(public cartCoordinator: CartCoordinator) {
    this.restore();
    this.cart$$ = this.cartCoordinator.selectCartItems$().subscribe((items) => {
      this.cartItems = items;
      this.stash(items);
    });
  }

  ngOnDestroy(): void {
    this.cart$$?.unsubscribe();
  }

  stash(items?: iCartItem[]) {
    const data = items || this.cartItems;
    try {
      localStorage.setItem('cartItems', JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  restore() {
    try {
      const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
      if (Array.isArray(items)) {
        this.cartCoordinator.restoreCart(items);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
