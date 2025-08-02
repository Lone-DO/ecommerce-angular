import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../store/product.actions';
import { CartCoordinator } from '../../cart/store/cart.coordinator';
import { ToastCoordinator } from 'src/app/core/store/toast/toast.coordinator';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(
    private cartCoordinator: CartCoordinator,
    public toastCoordinator: ToastCoordinator
  ) {}
  addToCart(product: Product): void {
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

  generateShorterText(text: string) {
    return text.substring(0, 100);
  }
  ngOnInit(): void {}
}
