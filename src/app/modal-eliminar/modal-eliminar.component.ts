import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Persona } from '../altas/altas.component';
import { TablasComponent } from '../tablas/tablas.component';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit {
  eliminar = false;
  @Output()
  eliminacion: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private comunicacion: TablasComponent) { }
  ngOnInit(): void {
    console.log("aqui1")
    this.comunicacion.eliminacion_observable.subscribe(eliminar_ =>{
      console.log("entra")
    
      this.abrir();
    })
  }
  confirmar_eliminacion = false;
  abrir()
  {
    console.log("abre")
    this.eliminar = true;
  }
  cerrar()
  {
    console.log("elimina")
    this.eliminar = false;
    this.confirmar_eliminacion = false;
    this.eliminacion.emit(this.confirmar_eliminacion);
  }
  si()
  {
    this.eliminar = false;
    this.confirmar_eliminacion = true;
    this.eliminacion.emit(this.confirmar_eliminacion);
  }
}
