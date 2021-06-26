import { Component, OnInit } from '@angular/core';
import { DatService } from '../dat.service';
import{dataone} from '../models/data1models'


@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component implements OnInit {
 

  mydataone:dataone[]=[];
  constructor(private dsobj:DatService) { }

  ngOnInit(): void {
    this.dsobj.get_user_one_data().subscribe(
      data=>{
        this.mydataone=data;
        console.log(this.mydataone)
      },
      err=>{
        console.log("err is",err)
      })



  }

}
