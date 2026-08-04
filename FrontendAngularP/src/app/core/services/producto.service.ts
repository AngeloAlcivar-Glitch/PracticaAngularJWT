import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private apiUrl = 'http://localhost:3000/api/productos';


  constructor(private http: HttpClient){}



  listar(){

    return this.http.get(
      this.apiUrl
    );

  }



  obtenerPorId(id:number){

    return this.http.get(
      `${this.apiUrl}/${id}`
    );

  }



  crear(producto:any){

    return this.http.post(
      this.apiUrl,
      producto
    );

  }



  actualizar(id:number, producto:any){

    return this.http.put(
      `${this.apiUrl}/${id}`,
      producto
    );

  }



  eliminar(id:number){

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );

  }


}