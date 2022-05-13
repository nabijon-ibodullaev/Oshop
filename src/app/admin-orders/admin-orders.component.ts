import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/product';
import { EstoreService } from '../Services/estore.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  categories: any[] = [];
  selected: any;
  allPrice = 0;
  productPrice: number[] = [];
  products: Product[] = [];
  constructor(private Estore: EstoreService) {}
  getAll: Product[] = this.products;
  optionValue: any;
  ngOnInit() {
    this.Estore.getCategory().subscribe((categories) => {
      this.categories = categories;
    });
  }
  addnewProduct() {
    console.log();
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
}
