import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstoreService {
  constructor(private Http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.Http.get('https://fakestoreapi.com/products/categories');
  }

  getMensProducts(): Observable<any> {
    return this.Http.get(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
  }
  getWomensProducts(): Observable<any> {
    return this.Http.get(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
  }
  getJeweleryProducts(): Observable<any> {
    return this.Http.get('https://fakestoreapi.com/products/category/jewelery');
  }
  getElectronicsProducts(): Observable<any> {
    return this.Http.get(
      'https://fakestoreapi.com/products/category/electronics'
    );
  }
  getAllProducts(): Observable<any> {
    return this.Http.get('https://fakestoreapi.com/products');
  }
}
