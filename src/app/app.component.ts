import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {CartItem} from "./store/cart/cart.actions";
import {CartCoordinator} from './store/cart/cart.coordinator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  title = 'Take Home Challenge';
  cart$$: any;

  cartItems: CartItem[] = [];

  constructor(public cartCoordinator: CartCoordinator) {
    this.cart$$ = this.cartCoordinator.selectCartItems$().subscribe(items => {
      this.cartItems = items;
    })
  }

  ngOnDestroy(): void {
    this.cart$$.unsubscribe();
  }
}
