import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor() { }

  private televisions:Product[]=[
    {
      productTitle:"Samsung",
      description:"Resolution : 3840 x 2160 pixels | Refresh Rate : 60 Hz Display Feature: PurColor | Crystal Processor 4K | 4K UHD Resolution | HDR | Motion Xcelerator | HDR 10+ | HLG | One Billion Color ", 
      productImage:"https://i.pinimg.com/236x/53/b9/e8/53b9e86f65672cbd48e1edb605fad585.jpg "
    },

    {
      productTitle:"LG 108 cm (43 Inches) ",
      description:"Resolution: 1920 x 1080 pixels Refresh Rate: 50 Hz Display Features : Dynamic Color Enhancer Active Noise Reduction HDR Dynamic Tone Mapping Active Noise Reduction Resolution Upscaler ", 
      productImage:"https://i.pinimg.com/236x/71/2d/45/712d45b036b34671e29efc7cc16c18d4.jpg "
    },

    {
      productTitle:"Sony 139 cm (55 Inches)",
      description:" Resolution: 3840 x 2160 pixels Display Features : Dolby Vision 4K X-Reality PRO Live Colour Technology Triluminos Display Dynamic Contrast Enhancer", 
      productImage:"https://i.pinimg.com/236x/07/2b/c1/072bc12ae07beaa99d08c83652bf7e4f.jpg "
    },
    {
      productTitle:"Xiaomi Mi 80 cm (32 Inches)",
      description:"Resolution: 1366 x 768 Pixels,Resolution: 1366 x 768 Pixels USB: 2, HDMI: 3,USB: 2, HDMI: 3 Speaker Output: 2X10 W,Speaker Output: 2X10 W ", 
      productImage:"https://i.pinimg.com/236x/ba/73/8f/ba738f438872840bda8dcebb658a3882.jpg "
    },
    {
      productTitle:"Hisense 108 cm (43 Inches) ",
      description:" Resolution: 3840 x 2160 pixels Refresh Rate : 60 HzDisplay Features : Dolby Vision HDR HLG (Hybrid Log-Gamma) HDR Ultra Dimming Dynamic Backlight Control Depth Enhancer", 
      productImage:"https://i.pinimg.com/236x/19/5f/22/195f228e908d1ca90d0fea431f4929e8.jpg "
    },
    {
      productTitle:"TCL 107.9 cm (32 Inches)",
      description:"Resolution: 1366 x 768 pixels | Refresh Rate: 60 Hz Display Features : 178 Degrees Viewing Angle | 280 Nits (Typ.) Brightness | 6.5 ms Response Time | DLED Backlight Technology ", 
      productImage:"https://i.pinimg.com/236x/10/1c/6b/101c6bee47c5225564ef94680dbe8811.jpg "
    },
    
  ];




    getTelevisionsData():Product[]{
      return this.televisions;
    }
 
}
