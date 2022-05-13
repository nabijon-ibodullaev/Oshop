import { Component, OnInit } from '@angular/core';
import { EstoreService } from '../Services/estore.service';
import {
  faTruck,
  faCreditCard,
  faArrowsRotate,
  faComments,
  faStar,
  faShoppingCart,
  faCartPlus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../Models/product';
import { AddCartService } from '../Services/add-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faCreditCard = faCreditCard;
  faTruck = faTruck;
  faArrowsRotate = faArrowsRotate;
  faComments = faComments;
  faStar = faStar;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  faCartPlus = faCartPlus;
  Categories: string[] = [];
  products: Product[] = [];
  WomansProducts: Product[] = [];
  JeweleryProducts: Product[] = [];
  ElectronicsProducts: Product[] = [];
  responsiveOptions: any;
  pageSize = 3;
  constructor(
    private EstoreService: EstoreService,
    private AddCartService: AddCartService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  ngOnInit() {
    // ? Get Category
    this.EstoreService.getCategory().subscribe((data) => {
      this.Categories = data;
    });

    // ? Get men's clothing
    this.EstoreService.getMensProducts().subscribe((product) => {
      this.products = product;
    });

    this.EstoreService.getWomensProducts().subscribe((products) => {
      this.WomansProducts = products;
    });

    this.EstoreService.getJeweleryProducts().subscribe((products) => {
      this.JeweleryProducts = products;
    });

    this.EstoreService.getElectronicsProducts().subscribe((products) => {
      this.ElectronicsProducts = products;
    });
  }
  onAddCart() {
    this.AddCartService.addPlusCart();
  }
  addToHeart = true;
  onAddedHeart(product: Product) {
    let index = this.products.find((x) => x.id == product);

    if (this.addToHeart == true) {
      this.addToHeart = false;
    } else {
      this.addToHeart = true;
    }
  }
}
