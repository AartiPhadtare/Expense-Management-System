import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { LoginApi } from "./login-api";
import {  UserService } from "../../shared/user.service";

@Component({
    selector:'app-login',
    templateUrl:'./login.html',
    imports:[ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
    providers:[LoginApi]
})
export class Login implements OnInit{
loginApi = inject(LoginApi);
router = inject(Router);
user= inject(UserService);

loginForm !: FormGroup;
fb = inject(FormBuilder);

ngOnInit(): void {
    this.loginForm = this.fb.group({
        email:['', Validators.compose([Validators.required, Validators.email])],
        password:['', Validators.compose([Validators.minLength(6), Validators.maxLength(9), Validators.required])]
    })
}

login(){
     const credentials = this.loginForm.value;
    this.loginApi.getUserData(credentials).subscribe({
        next: (res:any) =>{

        localStorage.setItem('token', res.token);
       this.user.isLoggedIn = true;
      console.log(this.user.isLoggedIn)

            alert('Login successful');
            this.loginForm.reset();
            this.router.navigate(['dashboard']);

            console.log(res);
        },
         error: (err) => {
      console.error('Login failed:', err);
      alert('Please enter the valid details');
    }
    })
}

}
