import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../store/product.actions';
import { ProductCoordinator } from '../store/product.coordinator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public products$: Observable<Product[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private productCoordinator: ProductCoordinator) {
    this.products$ = this.productCoordinator.selectProducts$();
    this.loading$ = this.productCoordinator.selectProductsLoading$();
    this.error$ = this.productCoordinator.selectProductsError$();
    this.productCoordinator.loadProducts();
  }
}
