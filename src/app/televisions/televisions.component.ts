import { Component, OnInit } from '@angular/core';
import {Data3Service} from '../data3.service'
import { Product } from '../models/product.model';
@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{

  televisions:Product[]=[];

//inject obj of DataService class
  constructor(private dsObj:Data3Service){
  }

  ngOnInit(){
    //obj initialization logic
   this.televisions= this.dsObj.getTelevisionsData();

  }
}