
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class UserService{
     isLoggedIn = false;
    router = inject(Router);

    logout(){
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    alert("logout Successfully");
        this.router.navigate(['login']);
    console.log(this.isLoggedIn)
    }

}