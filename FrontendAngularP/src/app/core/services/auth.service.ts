import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
providedIn:'root'
})

export class AuthService {


private api =
'http://localhost:3000/api/auth';


constructor(
private http:HttpClient
){}



register(data:any){

return this.http.post(

this.api+'/register',

data

);

}



login(data:any){

return this.http.post(

this.api+'/login',

data

);

}



guardarToken(token:string){

if(typeof window !== 'undefined'){

localStorage.setItem(
'token',
token
);

}

}



obtenerToken(){

if(typeof window !== 'undefined'){

return localStorage.getItem('token');

}

return null;

}



cerrarSesion(){

if(typeof window !== 'undefined'){

localStorage.removeItem('token');

}
}
}