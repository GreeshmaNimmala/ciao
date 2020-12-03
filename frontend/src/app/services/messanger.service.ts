import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {



  subject=new Subject();

  constructor() { }

  // private cart = new BehaviorSubject<Array<Product>>([]);
  //   public cart$ = this.cart.asObservable();

  //   public addItemToCart(product: Product): void {
  //       let cartArr = [...this.cart];
  //       cartArr.push(product)
  //       this.cart.next(cartArr)
  //   }

  sendMessage(product){
    this.subject.next(product);
  }

  getMessage(){
    return this.subject.asObservable();
  }
}
