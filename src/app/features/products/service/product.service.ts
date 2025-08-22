import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type iProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  fetchProductsFromApi$(): Observable<iProduct[]> {
    return this.http.get<iProduct[]>(this.apiUrl);
  }
}
