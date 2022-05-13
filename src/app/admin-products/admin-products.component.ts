import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estore } from '../Models/estore';
import { EstoreService } from '../Services/estore.service';
import { Product } from '../Models/product';
import {
  faTrash,
  faPencil,
  faTimesCircle,
  faExclamation,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  faTrash = faTrash;
  faPencil = faPencil;
  faTimesCircle = faTimesCircle;
  faExclamation = faExclamation;
  faMagnifyingGlass = faMagnifyingGlass;
  categories: any[] = [];
  selected: any;
  allPrice = 0;
  productPrice: number[] = [];
  products: Product[] = [];
  page = 1;
  pageSize = 8;
  constructor(private Estore: EstoreService, private router: Router) {}
  getAll: Product[] = this.products;
  optionValue: any;
  ngOnInit() {
    this.Estore.getAllProducts().subscribe((data) => {
      this.products = data;
    });
    this.Estore.getCategory().subscribe((categories) => {
      this.categories = categories;
    });
  }
  onChange(event: any) {
    if (this.selected === 'electronics') {
      this.Estore.getElectronicsProducts().subscribe((data) => {
        this.products = data;
      });
    } else if (this.selected === 'jewelery') {
      this.Estore.getJeweleryProducts().subscribe((data) => {
        this.products = data;
      });
    } else if (this.selected === "men's clothing") {
      this.Estore.getMensProducts().subscribe((data) => {
        this.products = data;
      });
    } else if (this.selected === "women's clothing") {
      this.Estore.getWomensProducts().subscribe((data) => {
        this.products = data;
      });
    } else {
      this.Estore.getAllProducts().subscribe((products) => {
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
  addNewProduct() {
    this.router.navigate(['/admin/new/products']);
  }
}
