import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../store/product.actions';
import { CartCoordinator } from '../../cart/store/cart.coordinator';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private cartCoordinator: CartCoordinator) {}
  addToCart(product: Product): void {
    this.cartCoordinator.addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
    });
  }

  generateShorterText(text: string) {
    return text.substring(0, 100);
  }
  ngOnInit(): void {}
}
