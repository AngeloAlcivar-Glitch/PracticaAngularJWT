import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../../core/services/auth.service';
import { Productos } from '../../../entidad/components/productos/productos';

@Component({
  selector: 'app-panelprincipal',
  standalone: true,
  imports: [
    CommonModule,
    Productos
  ],
  templateUrl: './panelprincipal.html',
  styleUrl: './panelprincipal.css'
})
export class Panelprincipal implements OnInit {

  correo: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const token = this.authService.obtenerToken();

    if (token) {

      console.log("Usuario autenticado");

    }

  }

  cerrarSesion() {

    this.authService.cerrarSesion();

    this.router.navigate(['/login']);

  }

}