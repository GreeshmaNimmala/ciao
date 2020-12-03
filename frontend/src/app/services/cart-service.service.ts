import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartURL } from '../config/api';
import { Cart } from '../model/cart';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }

  // private cart = new BehaviorSubject<Array<Product>>([]);
  //   public cart$ = this.cart.asObservable();

  //   public addItemToCart(product: Product): void {
  //       let cartArr = [...this.cart.value];
  //       cartArr.push(product)
  //       this.cart.next(cartArr)
  //   }

  getCartItems():Observable<Cart[]>{
    return this.http.get<Cart[]>(cartURL);
  }

  addProductToCart(product:Product):Observable<any>{
    return this.http.post(cartURL,{product});
  }
}
