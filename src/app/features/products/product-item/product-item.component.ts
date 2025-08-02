import { Component, Input, OnInit } from '@angular/core';
import { CartCoordinator } from '../../cart/store/cart.coordinator';
import { ToastCoordinator } from '../../toast/store/toast.coordinator';
import { type iProduct } from '../models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: iProduct | undefined;
  titleAttr: string = '';

  constructor(
    private cartCoordinator: CartCoordinator,
    public toastCoordinator: ToastCoordinator
  ) {}

  ngOnInit(): void {
    if (!this.product?.description) return;
    if (this.product.description.length > 100) {
      this.titleAttr = this.product?.description as string;
    }
  }

  addToCart(product: iProduct): void {
    this.cartCoordinator.addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
    });

    this.toastCoordinator.addMessage({
      message: `Successfully added ${product.title} to cart`,
      mode: 'success',
    });
  }
}
