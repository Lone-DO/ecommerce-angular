import { Component, OnDestroy } from '@angular/core';
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
    this.cart$$ = this.cartCoordinator.selectCartItems$().subscribe((items) => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    this.cart$$?.unsubscribe();
  }
}
