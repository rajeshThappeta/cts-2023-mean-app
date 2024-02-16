import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { Observable ,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);

  userLoginStatus=new BehaviorSubject<boolean>(false)
  currentUser=new BehaviorSubject<User>({
    username:'',
    password:'',
    email:'',
    dob:''
  })

  setUserLoginStatus(value:boolean){
    this.userLoginStatus.next(value)
  }
  setCurrentUser(user:User){
    this.currentUser.next(user);
  }

  getUserLoginStatus(){
    return this.userLoginStatus.asObservable()
  }

  getCurrentUser(){
    return this.currentUser.asObservable();
  }


  //create user(User registration)
  createUser(newUser: User): Observable<any> {
    return this.httpClient.post('http://localhost:4000/user-api/user', newUser);
  }



  //user login
  userLogin(userCredObj): Observable<any> {
    console.log(userCredObj);
    return this.httpClient.post(
      'http://localhost:4000/user-api/login',userCredObj
    );
  }

  //get user by username
  getUserByUsername(username): Observable<any> {
    return this.httpClient.get(
      `http://localhost:3000/users?username=${username}`
    );
  }

  //get users sensitve data
  getProtectedData(){
   return this.httpClient.get('http://localhost:4000/user-api/user-sensitive-data')
  }


  //user logout
  userLogout(){
    //reset current user
    this.setUserLoginStatus(false)
    //reset login status
    this.setCurrentUser({
      username:'',
      password:'',
      email:'',
      dob:''
    })
    //remove token from localstorage
    localStorage.removeItem('token')
  }
}



