import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsComponent } from './products/products.component';


@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }
  private bikes:Product[]=[

    {
      productTitle:"Royal Enfield",
      description:"Royal Enfield bullet G2 350 cc 1960 vintage motorcycle - ET08GR from Alamy's library of millions of high resolution stock photos, illustrations and vectors.", 
      productImage:"https://i.pinimg.com/236x/80/4e/4c/804e4cabae2dfaaa6eee2ea613fdbc0d.jpg "
    },
    {
      productTitle:"YZF-R15",
      description:"Yamaha YZF-R15 Streaking Cyan Edition Price in India was ₹ 1,17,873. Check Out  Specifications, Review, Features,  Speed of Yamaha YZF-R15 Streaking Cyan Edition.", 
      productImage:"https://i.pinimg.com/564x/a0/0a/4a/a00a4a9e99547c9af0bfa43ab78062fa.jpg"
    },
    {
      productTitle:"Hyosung GV650 Aquila Pro",
      description:"Hyosung along with its India partner DSK have just launched the sleek and beautiful looking cruiser the Hyosung GV650 Aquila Pro.............. ", 
      productImage:"https://i.pinimg.com/564x/19/d2/da/19d2da46ef28961f9bea4b2e49101b0b.jpg"
    },
    {
      productTitle:"bmw k1300r",
      description:" bmw k1300r media gallery. featuring 8 bmw k1300r high-resolution photos......... ", 
      productImage:"https://i.pinimg.com/236x/99/82/d0/9982d0f51a9738e6c252351e68f8b8a6.jpg"
    },
    {
      productTitle:"Harley Davidson Iron 883",
      description:"Harley Davidson Iron 883, would be a good choice as it is basic and a budget way into Harley ownership. Also, it is more suitable for both city and highway rides. ", 
      productImage:"https://i.pinimg.com/236x/00/df/c6/00dfc6c2fe39740a9008bc256e04dea2.jpg"
    },
    {
      productTitle:"Duke",
      description:"The 200 Duke is powered by 199.5cc BS6 engine which develops a power of 25.4 bhp and a torque of 19.5 Nm. With both front and rear disc brakes.", 
      productImage:"https://i.pinimg.com/236x/39/fb/de/39fbde05621799221b9b4533433e2e1f.jpg"
    }
  ];




    getBikesData():Product[]{
      return this.bikes;
    }
 
}

