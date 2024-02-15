import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
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

  ngOnInit(): void {
    //get url param
    let username=this.activatedRoute.snapshot.paramMap.get('username')
    //get user details based on username
    this.userService.getUserByUsername(username).subscribe({
      next:(usersList)=>{this.currentUser=usersList[0]},
      error:(err)=>{console.log(err)}
    })
  }

}
