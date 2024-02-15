import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import {User} from '../models/User'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  duplicateUserStatus:boolean=false;
  fb: FormBuilder = inject(FormBuilder);
  userService=inject(UserService)
  router=inject(Router)

  user = this.fb.group({
    username: [''],
    password: [''],
    email: [''],
    dob: [''],
  });

  onSubmitUser() {
    let {username,password,email,dob}=this.user.value;
    console.log(username,password,email,dob)
    let newUser =new User(username,password,email,dob);
      this.userService.createUser(newUser).subscribe({
        next:(res)=>{
          
          //navigate to login component
          if(res.message==='User created'){
           this.router.navigate(['/login'])
          }else{
            this.duplicateUserStatus=true;
          }
        },
        error:(error)=>{
          console.log("err in user creation",error)
        }
  })
  }
}
