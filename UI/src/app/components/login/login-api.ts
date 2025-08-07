import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable()
export class LoginApi{
    http = inject(HttpClient);

    getUserData(credentials: {email: string; password: string}){
        return this.http.post('http://localhost:8800/api/v1/users/login', credentials);
    }

}