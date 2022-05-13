import { Component, OnInit, ViewChild } from '@angular/core';
import { EstoreService } from '../Services/estore.service';
import { Product } from '../Models/product';

import {
  faTruck,
  faCreditCard,
  faArrowsRotate,
  faComments,
  faStar,
  faShoppingCart,
  faCartPlus,
  faHeart,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
} from '../Services/ngrx-store/product-cart.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // ! Icons
  faCreditCard = faCreditCard;
  faTruck = faTruck;
  faArrowsRotate = faArrowsRotate;
  faComments = faComments;
  faStar = faStar;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  faCartPlus = faCartPlus;
  faMagnifyingGlass = faMagnifyingGlass;

  // ! Categories
  categories: any[] = [];
  selected: any;
  allPrice = 0;
  productPrice: number[] = [];

  // !constructor
  constructor(
    private Service: EstoreService,
    private store: Store<{ count: number }>
  ) {}
  // !all products
  products: Product[] = [];
  getAll: Product[] = this.products;
  optionValue: any;
  // ! bootstrap paginator
  page = 1;
  pageSize = 8;
  public pageSlice = this.products.slice(0, 3);

  ngOnInit() {
    this.Service.getAllProducts().subscribe((products) => {
      this.products = products;
    });

    this.Service.getCategory().subscribe((categories) => {
      this.categories = categories;
    });
  }
  onChange(event: any) {
    if (this.selected === 'electronics') {
      this.Service.getElectronicsProducts().subscribe((data) => {
        this.products = data;
      });
    } else if (this.selected === 'jewelery') {
      this.Service.getJeweleryProducts().subscribe((data) => {
        this.products = data;
      });
    } else if (this.selected === "men's clothing") {
      this.Service.getMensProducts().subscribe((data) => {
        this.products = data;
      });
    } else if (this.selected === "women's clothing") {
      this.Service.getWomensProducts().subscribe((data) => {
        this.products = data;
      });
    } else {
      this.Service.getAllProducts().subscribe((products) => {
        this.products = products;
      });
    }
  }
  SelectedPrice: any;
  onChangePrice(event: any) {
    if (this.SelectedPrice === '0') {
      this.products.sort((a, b) => a.price - b.price);
    }
    if (this.SelectedPrice === '50') {
      this.products.sort((a, b) => b.price - a.price);
    }
  }

  isOnCart: boolean = false;
  increment(id: Product) {
    this.isOnCart = false;

    let index = this.products.indexOf(id);
    if (this.isOnCart === false) {
      this.store.dispatch(increment());
    } else {
      this.store.dispatch(decrement());
    }
  }
}
