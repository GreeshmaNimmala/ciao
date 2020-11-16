import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems=[
  //   {
  //   id:1,productId:1,productName:'soap',qty:1,price:10
  // },
  // {
  //   id:2,productId:2,productName:'soap',qty:2,price:20
  // },
  // {
  //   id:3,productId:1,productName:'soap',qty:6,price:18
  // },
  // {
  //   id:4,productId:4,productName:'soap',qty:2,price:10
  // },

];

cartTotal=0;


  constructor(private messageService:MessangerService) { }

  ngOnInit(){
    this.messageService.getMessage().subscribe((product:Product)=>{
      // console.log(product);
      this.addProductToCart(product)
    })
  }

  addProductToCart(product:Product){

    let productExist=false;

    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product._id){
        this.cartItems[i].qty++
        productExist=true;
        break;
      }
    }

    if(!productExist){

      this.cartItems.push(
        {
          productName:product.name,
          qty:1,
          price:product.price,
          productId:product._id
        }
      );

    }

    this.cartTotal=0;
    this.cartItems.forEach(item=>{
      this.cartTotal+=(item.qty*item.price)
    });

  }


}
