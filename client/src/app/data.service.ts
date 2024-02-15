import { HttpClient } from '@angular/common/http';
import { Injectable ,inject, signal} from '@angular/core';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  x=signal(10);
 




  //inject HttpClient
  httpClient=inject(HttpClient)

  //get users data
  getAllUsers():Observable<any>{
    //make HTTP GET req
    return this.httpClient.get<any>('https://reqres.in/api/users?page=2')
  }
  

  getUsers():Observable<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
  }
}
