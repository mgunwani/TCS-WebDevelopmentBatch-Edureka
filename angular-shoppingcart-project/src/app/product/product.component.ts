import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  // ngOnInit(): void {
  //   this.products = this.productService.findAll();
  //   console.log(this.products);
  // }

  ngOnInit(): void {
    this.productService.findAll().subscribe(result => {
      this.products = result;
    }, error => { console.log(error) })
  }

}
