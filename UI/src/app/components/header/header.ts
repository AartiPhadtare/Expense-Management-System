import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { UserService } from "../../shared/user.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.html',
    imports:[RouterLink]
})
export class Header{
router = inject(Router);
user = inject(UserService);

changePath(path: string){
this.router.navigate([path]);
}

constructor(){
    console.log(this.user.isLoggedIn)
}


}