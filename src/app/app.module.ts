import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularPrimeModule } from './angular-prime/angular-prime.module';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { FooterComponent } from './footer/footer.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EstoreService } from './Services/estore.service';
import { CardModule } from 'primeng/card';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { OrdersSuccessComponent } from './orders-success/orders-success.component';
import { AdminUsersService } from './Services/admin-users.service';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './Services/ngrx-store/product-cart.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    CheckOutComponent,
    ProfileComponent,
    LoginComponent,
    NotFoundComponent,
    FooterComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    OrdersSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    AngularPrimeModule,
    HttpClientModule,
    TooltipModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    StoreModule.forRoot({ count: productReducer }),
  ],
  providers: [EstoreService, CardModule, AdminUsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
