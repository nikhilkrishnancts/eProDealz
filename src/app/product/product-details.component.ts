import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  allowClick: boolean = false;
  constructor(private router: Router) { 
    setTimeout(() => {
      this.allowClick = true;
    },2000);
  }

  ngOnInit() {
  }
  changeRoute(routeValue) {
    
 
    this.router.navigate([routeValue]); 
    // you have to check this out by passing required route value.
    // this line will redirect you to your destination. By reaching to destination you can close your loader service.
    // please note this implementation may vary according to your routing code.
 
 }

}
