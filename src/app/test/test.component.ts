import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myPosts:Post[]=[];
  users;

  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
    this.fsObj.getUsers().subscribe(
      userData=>{
        this.users=userData;
        
      },
      err=>{
        console.log("err is getting postd dats",err)
      }
    )
  }

}
