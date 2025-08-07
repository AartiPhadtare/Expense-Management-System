import { Component, inject } from "@angular/core";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { UserService } from "../../shared/user.service";

@Component({
    selector:'app-dashboard',
    templateUrl:'./dashboard.html',
    imports:[]
})
export class Dashboard{
    user = inject(UserService);

}