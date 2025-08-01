import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductInterface} from "../../models/product.model";
import {AppState} from '../index';
import {loadProducts} from './product.actions';
import {selectAllProducts, selectProductsError, selectProductsLoading} from './product.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductCoordinator {
  constructor(
    private store: Store<AppState>
  ) {
  }

  selectProducts$(): Observable<ProductInterface[]> {
    return this.store.select(selectAllProducts);
  }

  selectProductsLoading$(): Observable<boolean> {
    return this.store.select(selectProductsLoading);
  }

  selectProductsError$(): Observable<any> {
    return this.store.select(selectProductsError);
  }

  loadProducts(): void {
    this.store.dispatch(loadProducts());
  }
}
