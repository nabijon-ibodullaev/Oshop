import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class AddCartService {
  constructor() {}
  numberCart: number = 0;
  addPlusCart() {
    return this.numberCart + 1;
  }
  minusCart() {
    return this.numberCart - 1;
  }
}
