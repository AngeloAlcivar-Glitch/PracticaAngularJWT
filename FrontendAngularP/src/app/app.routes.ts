import { Routes } from '@angular/router';
import { Home } from './modules/home/components/home/home';
import { Login } from './modules/auth/components/login/login';
import { Registro } from './modules/auth/components/registro/registro';
import { Panelprincipal } from './modules/dashboard/components/panelprincipal/panelprincipal';
import { authGuard } from './core/guards/auth-guard';


export const routes: Routes = [


  {
 path:'',
 component:Home
},


{
 path:'login',
 component:Login
},


{
 path:'registro',
 component:Registro
},


{
 path:'panel',
 component:Panelprincipal,
 canActivate:[authGuard]
},


{
 path:'**',
 redirectTo:''
}

];