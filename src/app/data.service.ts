import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsComponent } from './products/products.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

 


    getMobilesData():Observable<Product[]>{
     return this.hc.get<Product[]>("assets/mobiles.json")
    }
 
}
