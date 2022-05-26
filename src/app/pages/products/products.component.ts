import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void { // is called after the constructor and called only once
    this.productSvc.getProducts().pipe(// is used to add operators to the observable
      tap(res => console.log(res)) // is used to log the response in the console 
    ).subscribe(); // is used to subscribe to the observable
  }

}
