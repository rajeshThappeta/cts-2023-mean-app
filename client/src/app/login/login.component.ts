import { Component, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  fb: FormBuilder = inject(FormBuilder);
  userService = inject(UserService);
  router = inject(Router);
  userCredentialsError = {
    userCredErrStatus: false,
    userCredErrMsg: "",
  };

  userCredentials = this.fb.group({
    username: [""],
    password: [""],
  });

  onSubmitUser() {
    // console.log(this.userCredentials.value);
    this.userService.userLogin(this.userCredentials.value).subscribe({
      next: (res) => {
        if (res.message === "login success") {
          //store token in local/session storage
          localStorage.setItem("token", res.token);
          //set user status & current user to service
          this.userService.setUserLoginStatus(true)
          this.userService.setCurrentUser(res.user)
          //sessionStorage.setItem('token',res.token)
          //navigate to user profile
          this.router.navigate([`/user-profile/${res.user.username}`]);
        } else {
          this.userCredentialsError = {
            userCredErrStatus: true,
            userCredErrMsg: res.message,
          };
        }
      },
      error: (error) => {
        console.log("err in user login", error);
      },
    });
  }
}
