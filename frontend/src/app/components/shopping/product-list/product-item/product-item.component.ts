import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {


@Input() productItem:Product
  constructor(private messageService:MessangerService,private cartService:CartServiceService) { }

  ngOnInit(): void {
  }

  addItemToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.messageService.sendMessage(this.productItem)
    });
  }



}
