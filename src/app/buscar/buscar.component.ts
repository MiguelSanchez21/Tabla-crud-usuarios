import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor() { }
  nombre: string;
  padreForm: FormControl = new FormControl();

  @Output() 
  nombre_: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }
  onKeyUp()
  {
    this.nombre = this.padreForm.value;
    this.nombre_.emit(this.nombre);
  }
}
