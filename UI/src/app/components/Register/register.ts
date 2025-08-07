import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { RegisterApi } from "./register-api";

@Component({
    selector:'app-register',
    templateUrl:'./register.html',
     imports:[ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
     providers:[RegisterApi]
})
export class Register{

registerApi = inject(RegisterApi)
registerUser: any =[];

router = inject(Router);

    registerForm !: FormGroup;
fb = inject(FormBuilder);


ngOnInit(): void {
    this.registerForm = this.fb.group({
          name:['',Validators.required],
        phoneNumber:['',Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
        email:['', Validators.compose([Validators.required, Validators.email])],
        password:['',Validators.compose([Validators.maxLength(9), Validators.minLength(6)])]
    })
}

 register(){
        this.registerApi.register(this.registerForm.value).subscribe({
          next:(res: any) => {
            alert("sign up succesfully");
            this.registerForm.reset();
            this.router.navigate(['login'])
          },
          error:(err) => {
            console.log(err);
          },
        })
    }
}