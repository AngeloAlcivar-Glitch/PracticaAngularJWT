import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone:true,

  imports:[
    CommonModule,
    FormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],

  templateUrl:'./login.html',
  styleUrl:'./login.css'
})


export class Login {


correo="";

password="";



constructor(

private authService:AuthService,

private router:Router

){}




ingresar(){


const datos={

correo:this.correo,

password:this.password

};



this.authService.login(datos)

.subscribe({

next:(respuesta:any)=>{


alert(respuesta.mensaje);


// guardar JWT

this.authService.guardarToken(
respuesta.token
);


// ir al panel

this.router.navigate(['/panel']);



},



error:(error)=>{
  const mensaje = error?.error?.mensaje || 'Error al iniciar sesión';
  alert(mensaje);
}

});

}



}