import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  count=0;

  constructor(private messangerService:MessangerService) { }

  ngOnInit(){


}


}
