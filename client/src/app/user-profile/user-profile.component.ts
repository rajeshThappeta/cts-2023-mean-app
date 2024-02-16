import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  activatedRoute=inject(ActivatedRoute)
  userService=inject(UserService)
  currentUser:any;
  loggedinUser:User;
  resOfProtectedRoute:string=''

  ngOnInit(): void {
    
    this.userService.getCurrentUser().subscribe({
      next:(user:User)=>{
        this.loggedinUser=user;
      },
      error:(err)=>{
        console.log("err in user profile",err)
      }
    })
   
  }


  getSensiveData(){
    this.userService.getProtectedData().subscribe({
      next:(res)=>{
          this.resOfProtectedRoute=res['message'];

      },
      error:err=>{
        console.log("err in fetched protected data",err)
      }
    })
  }

}
