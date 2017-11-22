import { Component, OnInit } from '@angular/core';
import {Products} from '../products.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Products[] = [
    new Products('Test','This is a test desc','../../assets/images/deals.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
