import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productURL } from '../config/api';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  // products:Product[]=[
  //   new Product('Soap','Handmadesoap',10,'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/120932868_144754360675508_5784301154187559481_o.jpg?_nc_cat=107&ccb=2&_nc_sid=a26aad&_nc_ohc=rWGUouqkF4IAX9a7dwB&_nc_ht=scontent-ort2-1.xx&oh=0c42fb5ba2c9ff6a17c0c2a445d5d01c&oe=5FCBFE9A'),
  //   new Product(1,'Soap','Handmadesoap',10,'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/120932868_144754360675508_5784301154187559481_o.jpg?_nc_cat=107&ccb=2&_nc_sid=a26aad&_nc_ohc=rWGUouqkF4IAX9a7dwB&_nc_ht=scontent-ort2-1.xx&oh=0c42fb5ba2c9ff6a17c0c2a445d5d01c&oe=5FCBFE9A'),
  //   new Product(1,'Soap','Handmadesoap',10,'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/120932868_144754360675508_5784301154187559481_o.jpg?_nc_cat=107&ccb=2&_nc_sid=a26aad&_nc_ohc=rWGUouqkF4IAX9a7dwB&_nc_ht=scontent-ort2-1.xx&oh=0c42fb5ba2c9ff6a17c0c2a445d5d01c&oe=5FCBFE9A'),
  //   new Product(1,'Soap','Handmadesoap',10,'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/120932868_144754360675508_5784301154187559481_o.jpg?_nc_cat=107&ccb=2&_nc_sid=a26aad&_nc_ohc=rWGUouqkF4IAX9a7dwB&_nc_ht=scontent-ort2-1.xx&oh=0c42fb5ba2c9ff6a17c0c2a445d5d01c&oe=5FCBFE9A'),
  //   new Product(1,'Soap','Handmadesoap',10,'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/120932868_144754360675508_5784301154187559481_o.jpg?_nc_cat=107&ccb=2&_nc_sid=a26aad&_nc_ohc=rWGUouqkF4IAX9a7dwB&_nc_ht=scontent-ort2-1.xx&oh=0c42fb5ba2c9ff6a17c0c2a445d5d01c&oe=5FCBFE9A'),
  //   new Product(1,'Soap','Handmadesoap',10,'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/120932868_144754360675508_5784301154187559481_o.jpg?_nc_cat=107&ccb=2&_nc_sid=a26aad&_nc_ohc=rWGUouqkF4IAX9a7dwB&_nc_ht=scontent-ort2-1.xx&oh=0c42fb5ba2c9ff6a17c0c2a445d5d01c&oe=5FCBFE9A'),

  // ]


  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(productURL);
  }

}
