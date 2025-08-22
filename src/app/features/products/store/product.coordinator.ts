import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { type AppState } from '../../../store';

import { loadProducts, toggleView } from './product.actions';
import {
  selectAllProducts,
  selectProductsError,
  selectProductsLoading,
  selectProductsView,
} from './product.selectors';
import { type iProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductCoordinator {
  constructor(private store: Store<AppState>) {}

  selectProducts$(): Observable<iProduct[]> {
    return this.store.select(selectAllProducts);
  }

  selectProductsLoading$(): Observable<boolean> {
    return this.store.select(selectProductsLoading);
  }

  selectProductsError$(): Observable<any> {
    return this.store.select(selectProductsError);
  }

  selectProductsView$(): Observable<string> {
    return this.store.select(selectProductsView);
  }

  toggleView(): void {
    return this.store.dispatch(toggleView());
  }

  loadProducts(): void {
    this.store.dispatch(loadProducts());
  }
}
