import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddCartService } from '../Services/add-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  EstoreEmail: string = 'estore@gmail.com';
  EstorePhone: string = '+99 897 361 91 77';
  showNavbar: boolean = false;
  favorite: number = 0;
  shoppingCart!: number;
  isAdmin: boolean = true;

  countCart$!: Observable<any>;
  onMobileNavbar() {
    this.showNavbar = !this.showNavbar;
  }
  constructor(
    private CartService: AddCartService,
    private store: Store<{ count: number }>
  ) {
    this.countCart$ = store.select('count');
  }

  ngOnInit() {
    this.shoppingCart = this.CartService.numberCart;
  }
}
