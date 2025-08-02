import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CartItem } from './features/cart/store/cart.actions';
import { CartCoordinator } from './features/cart/store/cart.coordinator';
import { ToastCoordinator } from './core/store/toast/toast.coordinator';
import { iToastItem } from './core/store/toast/toast.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  title = 'Take Home Challenge';
  cart$$: any;
  toast$$: any;

  cartItems: CartItem[] = [];
  toastMessages: iToastItem[] = [];

  constructor(
    public cartCoordinator: CartCoordinator,
    public toastCoordinator: ToastCoordinator
  ) {
    this.cart$$ = this.cartCoordinator.selectCartItems$().subscribe((items) => {
      this.cartItems = items;
    });
    this.toast$$ = this.toastCoordinator
      .selectMessages$()
      .subscribe((messages) => {
        this.toastMessages = messages;
      });
  }

  clearToast(toast: iToastItem) {
    this.toastCoordinator.removeMessage(toast);
  }

  ngOnDestroy(): void {
    this.cart$$.unsubscribe();
    this.toast$$.unsubscribe();
  }
}
