import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent  {

  mobiles=[
    {
      productTitle:"ONEPLUS",
      description:"Go Beyond Speed - OnePlus 7 Pro with 6.67 inch Fluid AMOLED Display , 48 MP  Lens Triple Camera, Warp Charge 30, Snapdragon 855 ", 
      productImage:"https://i.pinimg.com/236x/91/51/e2/9151e244d07d606572ea621ad084a826.jpg "
    },
    {
      productTitle:"Iphone",
      description:"Order the Apple iPhone 12 Pro Max online from Boost Mobile! Check out brand new iPhone 12  features like the Super Retina display etc", 
      productImage:"https://i.pinimg.com/236x/4f/16/49/4f164964b6973c1f2d6bf02ef82fb16a.jpg"
    },
    {
      productTitle:"SAMSUNG",
      description:"Samsung Galaxy S20 G981U 128GB GSM/CDMA Unlocked Phone (US Version) - Cloud Pink, Its and amazing mobile .", 
      productImage:"https://i.pinimg.com/236x/ad/dc/8b/addc8bc87edce12f662b5d73489b7155.jpg"
    },
    {
      productTitle:"Xiaomi",
      description:"Xiaomi launched Redmi Note 9 Pro and Redmi Note 9 Pro Max in India. India Redmi Note 9 Pro launched as Redmi Note 9S in some markets ", 
      productImage:"https://i.pinimg.com/236x/bd/9c/09/bd9c090bd6c6a3cc5d4a89b86d1642ba.jpg"
    },
    {
      productTitle:"OPPO",
      description:"Explore the latest innovative OPPO smartphones and accessories and leap into the future with OPPO  Series, OPPO Find X2 Series, OPPO A93 and OPPO Watch. ", 
      productImage:"https://i.pinimg.com/564x/88/a4/e7/88a4e7dd7e2c2422a895b80207e6d6b7.jpg"
    },
    {
      productTitle:"Huawei",
      description:"The Huawei Mate 40 series is highly anticipated phone currently. The series is understood for bringing cutting-edge technology and this year can", 
      productImage:"https://i.pinimg.com/564x/03/10/8b/03108bd2fa87e03dbdd69438c070c68f.jpg"
    }
  ]

}

