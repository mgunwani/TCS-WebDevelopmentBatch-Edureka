
// import { Product } from './../models/product';
// import { Injectable } from "@angular/core";

// @Injectable()
// export class ProductService {

//     private products: Product[];

//     constructor() {
//         this.products = [
//             { id: "1001", name: "Product One", price: 1000, "image": "q1.png" },
//             { id: "1002", name: "Product Two", price: 2000, "image": "q2.png" },
//             { id: "1003", name: "Product Three", price: 3000, "image": "q3.png" }
//         ]
//     }

//     findAll(): Product[] {
//         return this.products;
//     }

//     find(id: string): Product {
//         return this.products[this.getSelectedIndex(id)];
//     }

//     private getSelectedIndex(id: string) {
//         for (var i = 0; i < this.products.length; i++) {
//             if (this.products[i].id == id) {
//                 return i;
//             }
//         }
//         return -1;
//     }

// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

    constructor(private _http: HttpClient) { }

    findAll(): Observable<Product[]> {
        return this._http.get<Product[]>("http://localhost:3000/products")
    }

    find(id: string): Observable<Product> {
        return this._http.get<Product>("http://localhost:3000/products/" + id)
    }

}