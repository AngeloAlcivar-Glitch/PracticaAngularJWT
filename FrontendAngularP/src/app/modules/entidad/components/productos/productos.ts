import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { ProductoService } from '../../../../core/services/producto.service';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DynamicDialogModule
  ],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {


  productos:any[] = [];


  producto:any = {

    nombre:'',
    descripcion:'',
    precio:0,
    stock:0

  };


  mostrarFormulario = false;

  editando = false;

  idEditar:number | null = null;



  constructor(
    private productoService: ProductoService
  ){}



  ngOnInit(){

    this.listar();

  }



  listar(){

    this.productoService.listar()
    .subscribe({

     next:(data:any)=>{

    this.productos = data;

    console.log("Productos recibidos desde API:", data);

},

      error:(error)=>{

        console.log(error);

      }

    });

  }



  nuevo(){

    this.producto = {

      nombre:'',
      descripcion:'',
      precio:0,
      stock:0

    };

    this.editando=false;

    this.mostrarFormulario=true;

  }



  guardar(){


    if(this.editando && this.idEditar !== null){

      this.productoService.actualizar(
        this.idEditar,
        this.producto
      )
      .subscribe(()=>{

        this.listar();

        this.mostrarFormulario=false;

      });


    }else{


      this.productoService.crear(
        this.producto
      )
      .subscribe(()=>{

        this.listar();

        this.mostrarFormulario=false;

      });

    }


  }



  editar(producto:any){

    this.producto={...producto};

    this.idEditar=producto.id;

    this.editando=true;

    this.mostrarFormulario=true;

  }



  eliminar(id:number){


    if(confirm("¿Eliminar producto?")){


      this.productoService.eliminar(id)
      .subscribe(()=>{

        this.listar();

      });


    }


  }


}