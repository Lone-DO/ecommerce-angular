import { Component, Input, OnInit } from '@angular/core';
import { CartCoordinator } from '../../cart/store/cart.coordinator';
import { ToastCoordinator } from '../../toast/store/toast.coordinator';
import { type iProduct } from '../models';
import { iCartItem } from '../../cart/models';
import { Store } from '@ngrx/store';
import { selectCartItem } from '../../cart/store/cart.selectors';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: iProduct | undefined;
  cartItem: iCartItem | undefined;
  titleAttr: string = '';

  constructor(
    private cartCoordinator: CartCoordinator,
    public toastCoordinator: ToastCoordinator,
    private store: Store
  ) {}

  ngOnInit(): void {
    if (!this.product?.description) return;
    if (this.product.description.length > 100) {
      this.titleAttr = this.product?.description as string;
    }
    this.checkCart();
  }

  checkCart() {
    this.store
      .select(selectCartItem(this.product?.id as number))
      .subscribe((res) => (this.cartItem = res))
      .unsubscribe();
  }
  addToCart(product: iProduct): void {
    this.cartCoordinator.addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
    });

    this.checkCart();

    this.toastCoordinator.addMessage({
      message: `Successfully added ${product.title} to cart`,
      mode: 'success',
    });
  }
  /** Duplicate Helper function from CartList */
  updateItem(mode: 'increment' | 'decrement') {
    if (!this.cartItem) return;
    const quantity = this.cartItem.quantity + (mode === 'decrement' ? -1 : 1);
    if (quantity) this.cartCoordinator.addToCart(this.cartItem, quantity);
    else this.cartCoordinator.removeFromCart(this.cartItem);
    this.checkCart();
  }
}
