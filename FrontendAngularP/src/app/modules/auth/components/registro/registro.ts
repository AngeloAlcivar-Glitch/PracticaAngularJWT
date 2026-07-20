import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {


  nombre="";
  correo="";
  password="";


  constructor(
    private authService:AuthService,
    private router:Router
  ){}



  registrar(){


    const usuario = {

      nombre:this.nombre,

      correo:this.correo,

      password:this.password

    };


    this.authService.register(usuario)
    .subscribe({

      next:(respuesta:any)=>{


        alert(respuesta.mensaje);


        this.router.navigate(['/login']);


      },


      error:(error)=>{


        alert(error.error.mensaje);


      }


    });


  }


}