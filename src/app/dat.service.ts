import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import{dataone} from '../app/models/data1models' ;
import{datatwo} from '../app/models/data2models' ;

@Injectable({
  providedIn: 'root'
})
export class DatService {

  constructor(private hc:HttpClient) { }

  get_user_one_data():Observable<dataone[]>
  {
    return this.hc.get<dataone[]>('https://jsonplaceholder.typicode.com/users')
  }

  get_user_two_data():Observable<datatwo>
  {
    return this.hc.get<datatwo>('https://reqres.in/api/unknown')
  }

}





