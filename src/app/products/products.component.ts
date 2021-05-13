import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

products:Product[]=[{
  productTitle:"Leather Retail",
  description:" Women Black Solid Lightweight Leather Jacket",
  productImage:"https://i.pinimg.com/236x/3b/59/12/3b5912ce38c47b40d58a52ae8cf34c97.jpg"
  },
  {
  productTitle:"Roadster",
  description:" Women Blue Washed Regular Fit Denim Shorts",
  productImage:"https://i.pinimg.com/236x/05/11/f5/0511f50f2b5e78c1a62a9f3a90489de0.jpg"
  },
  
  {
  productTitle:"SASSAFRAS",
  description:" Women red-Coloured & grey  Printed A-Line Dress",
  productImage:"https://i.pinimg.com/236x/78/39/43/7839432edaa771592a0c0e1a75e69921.jpg"
  },
  
  {
  productTitle:"JUNEBERRY",
  description:" Women grey  Dyed Round Neck T-shirt",
  productImage:"https://i.pinimg.com/236x/44/96/04/4496040edf0dc2795263f88cc511d330.jpg"
  },
  
  {
  productTitle:"Red Tape",
  description:"Red Tape  mustard  Solid Sneakers also called trainers, athletic shoes, tennis shoes, skate shoes) ",
  productImage:"https://i.pinimg.com/236x/f9/bb/f5/f9bbf5776e040cb8630607358694b5c6.jpg"
  },
  
  {
  productTitle:"Wedge Heels",
  description:" The thin, tall heel adds visual length to your legs and some spring to your step.",
  productImage:"https://i.pinimg.com/236x/45/87/34/45873464d45ed46c82c7bf3b1756e0a1.jpg"
  },
  {
    productTitle:"Madden NYC",
    description:"Dressy ensembles get a picture perfect finish with madden NYC.  ",
    productImage:"https://i.pinimg.com/236x/2b/08/c8/2b08c8cedcb5619afc46ff67b88fe604.jpg"
  },

  {
    productTitle:"VALA PINK PATEN",
    description:" Shiny, sharp and seductive! The VALA pump delivers all of the above,  printed surfaces.",
    productImage:"https://i.pinimg.com/564x/d0/5b/96/d05b9693017e917f9fc3add1d2fb36cc.jpg"
    }

  ];


}
