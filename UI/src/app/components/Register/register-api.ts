import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class RegisterApi{
    http = inject(HttpClient);

    register(userData: any){
       return this.http.post('http://localhost:8800/api/v1/users/register',userData);
    }

}