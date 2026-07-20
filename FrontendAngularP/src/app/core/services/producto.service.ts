import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class ProductoService {


private api="http://localhost:3000/api/productos";


constructor(
private http:HttpClient
){}



listar(){

return this.http.get<any[]>(this.api);

}



crear(producto:any){

return this.http.post(
this.api,
producto
);

}



actualizar(id:number, producto:any){

return this.http.put(
`${this.api}/${id}`,
producto
);

}



eliminar(id:number){

return this.http.delete(
`${this.api}/${id}`
);

}


}