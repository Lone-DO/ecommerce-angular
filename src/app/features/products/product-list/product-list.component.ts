import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductCoordinator } from '../store/product.coordinator';
import { type iProduct } from '../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnDestroy {
  public products$: Observable<iProduct[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;
  public view$: Subscription;
  view: string = 'grid';
  isGrid: boolean = false;

  constructor(private productCoordinator: ProductCoordinator) {
    this.products$ = this.productCoordinator.selectProducts$();
    this.loading$ = this.productCoordinator.selectProductsLoading$();
    this.error$ = this.productCoordinator.selectProductsError$();
    this.view$ = this.productCoordinator
      .selectProductsView$()
      .subscribe((view) => {
        this.view = view;
        this.isGrid = view === 'grid';
      });
    this.productCoordinator.loadProducts();
  }

  ngOnDestroy(): void {
    this.view$.unsubscribe();
  }

  toggleView() {
    this.productCoordinator.toggleView();
  }
}
