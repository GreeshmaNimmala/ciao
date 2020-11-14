import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import {HomeComponent} from './components/shared/home/home.component';
import { FilterComponent } from './components/shopping/filter/filter.component';
import { ProductListComponent } from './components/shopping/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping/product-list/product-item/product-item.component';
import { CartComponent } from './components/shopping/cart/cart.component';
import { CartItemComponent } from './components/shopping/cart/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ShoppingComponent,
    FilterComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
