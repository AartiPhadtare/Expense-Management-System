import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/Register/register';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'register',
        component:Register
    }
];
