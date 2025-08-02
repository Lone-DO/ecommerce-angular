import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CartCoordinator } from '../store/cart.coordinator';
import { ToastCoordinator } from '../../toast/store/toast.coordinator';
import { type iCartItem } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartGuard implements CanActivate, OnDestroy {
  cart$$: Subscription | undefined;
  items: iCartItem[] = [];

  constructor(
    private cartCoordinator: CartCoordinator,
    private toastCoordinator: ToastCoordinator,
    private route: Router
  ) {
    this.cart$$ = this.cartCoordinator.selectCartItems$().subscribe((items) => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    this.cart$$?.unsubscribe();
  }
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.items.length) {
      const suggestion = false;
      if (!suggestion) {
        this.route.navigate(['/cart/not-found']);
      } else {
        /** Product Requirements say to redirect to notfound
         * Alternatively, we could throw a toast before redirecting user to product list
         */
        this.toastCoordinator.addMessage({
          message: 'Cart Empty, Please select an item then try again',
          mode: 'info',
        });
        this.route.navigate(['/cart/not-found']);
      }
    }
    return Boolean(this.items.length);
  }
}
