import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Persona } from '../altas/altas.component';

@Component({
  selector: 'app-modal-mostrar',
  templateUrl: './modal-mostrar.component.html',
  styleUrls: ['./modal-mostrar.component.css']
})
export class ModalMostrarComponent implements OnChanges {
  @Input() abrir_modal: number;
  @Input() personas: Persona[] = [];

  abrir = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.abrir_modal != 0)
    {
      console.log("hola");
      this.abrir = true;
      this.imprimir();
    }
  }

  arreglo_lista: Persona[] = [];
  imprimir()
  {
    this.arreglo_lista = [];
    this.personas.forEach((d) =>
    {
      if(d.permitir == true)
      {
        this.arreglo_lista.push(d);
      }
    });
  }

  cerrar()
  {
    this.abrir = false;
  }
}
