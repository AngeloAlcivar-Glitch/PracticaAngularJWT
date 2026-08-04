import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api =
    'https://backend-angelo-2026-cndhbhdrbgh7b9eg.australiaeast-01.azurewebsites.net/api/auth';

  constructor(
    private http: HttpClient
  ) {}

  register(data: any) {
    return this.http.post(
      this.api + '/register',
      data
    );
  }

  login(data: any) {
    return this.http.post(
      this.api + '/login',
      data
    );
  }

  guardarToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  obtenerToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }

    return null;
  }

  cerrarSesion() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}