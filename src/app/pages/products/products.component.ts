import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void { // is called after the constructor and called only once
    this.productSvc.getProducts().pipe(// add operators to the observable
      tap((products: Product[]) => this.products  = products) //capture the products
    ).subscribe(); // is used to subscribe to the observable
  }

  addToCart(product: Product) {
    
  }

}
