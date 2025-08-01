import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {CartCoordinator} from '../store/cart/cart.coordinator';
import {Product} from '../store/product/product.actions';
import {ProductCoordinator} from "../store/product/product.coordinator";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public products$: Observable<Product[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(
    private cartCoordinator: CartCoordinator,
    private productCoordinator: ProductCoordinator
  ) {
    this.products$ = this.productCoordinator.selectProducts$();
    this.loading$ = this.productCoordinator.selectProductsLoading$();
    this.error$ = this.productCoordinator.selectProductsError$();
    this.productCoordinator.loadProducts();
  }

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
}
