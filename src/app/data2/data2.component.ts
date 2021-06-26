import { Component, OnInit } from '@angular/core';
import {datatwo} from '../models/data2models';
import {DatService} from '../dat.service';


@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component implements OnInit {

  mydatatwo:datatwo;
  mysubs2:any;


  constructor(private data2obj:DatService) { }

  ngOnInit(): void {

    this. mysubs2=this.data2obj.get_user_two_data().subscribe(
      data=>{
        this.mydatatwo=data;
      },
      err=>{
        console.log("err is",err)
      }
    )

  }
  ngOnDestroy(){
    this.mysubs2.unsubscribe();
  } 


}
