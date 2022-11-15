import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  constructor() { }

  listado: string[]=['Sergio','Javier','Pilar','Vicente', 'Javi'];
  listaAprobados:string[]=[];
  aprobar():void{
    if(this.listado.length!=0){
      this.listaAprobados.push(this.listado[this.listado.length-1]);
      this.listado.pop();
    }
    
  }
}
