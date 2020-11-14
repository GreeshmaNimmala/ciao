import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {


@Input() productItem:Product
  constructor(private messageService:MessangerService) { }

  ngOnInit(): void {
  }

  addItemToCart(){
    this.messageService.sendMessage(this.productItem)
  }

}
