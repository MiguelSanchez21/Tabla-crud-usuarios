import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl } from "@angular/forms";

export interface Persona
{
  id: number, 
  nombre: string, 
  apellido: string, 
  edad: number, 
  correo: string,   
  permitir: boolean
}

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit{

  id: number = 0;
  nombre: string;
  padreForm: FormControl = new FormControl();
  apellido: string;
  padreForm2: FormControl = new FormControl();
  edad: number;
  padreForm3: FormControl = new FormControl();
  correo: string;
  padreForm4: FormControl = new FormControl();

  permitir_guardar: boolean = false;

  personas: Persona[] = [];
  @Output() 
  persona_: EventEmitter<Persona[]> = new EventEmitter<Persona[]>();
  
  ngOnInit(): void { 
  }
  guardar()
  {
    this.nombre = this.padreForm.value;
    this.apellido = this.padreForm2.value;
    this.edad = this.padreForm3.value;
    this.correo = this.padreForm4.value;
    
    var permitir_guardar: boolean = true;
    var espacios_nombre: boolean = false;
    var espacios_apellido: boolean = false;
    
    var copia_nombre: string = "";
    var copia_apellido: string = "";
    var copia_correo: string = "";
    
    //Validar Campos
    if(this.nombre == undefined || this.apellido == undefined  || this.correo == undefined || this.edad == undefined)
    {
      alert("INGRESA LOS CAMPOS SOLICITADOS");
      console.log("Ingrese Los Campos");
      permitir_guardar = false;
    }
    else if(this.nombre == null || this.apellido == null  || this.correo == null || this.edad == null)
    {
      alert("FALTAN CAMPOS POR RELLENAR");
      console.log("alert")
      permitir_guardar = false;
    }
    else if(this.nombre.length == 0 || this.apellido.length == 0  || this.correo.length == 0 || this.edad == 0)
    {
      alert("FALTAN CAMPOS POR RELLENAR");
      permitir_guardar = false;
    }
    else
    {
      for(var i: number = 0; i < this.nombre.length; i++)
      {
        if(this.nombre[i] != " ")
        {
          espacios_nombre = true;
          copia_nombre = copia_nombre + this.nombre[i];
        }
        if(espacios_nombre == true && this.nombre[i] == " ")
        {
          copia_nombre = copia_nombre + this.nombre[i];
          espacios_nombre = false;
        }
      }
      this.nombre = copia_nombre;

      for(i = 0; i < this.apellido.length; i++)
      {
        if(this.apellido[i] != " ")
        {
          espacios_apellido = true;
          copia_apellido = copia_apellido + this.apellido[i];
        }
        if(espacios_apellido == true && this.apellido[i] == " ")
        {
          copia_apellido = copia_apellido + this.apellido[i];
          espacios_apellido = false;
        }
        
        //this.apellido = copia_apellido;

        for(i = 0; i < this.correo.length; i++)
        {
          if(this.correo[i] != " ")
          {
            copia_correo = copia_correo + this.correo[i];
          }
        }
        this.correo = copia_correo;

        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido: boolean = expReg.test(this.correo);

        if(esValido == true)
        {
          if(this.edad >= 0)
          {
            permitir_guardar = true;
          }
        }
        else
        {
          alert("VERIFICA EL CONTENIDO DE TUS CAMPOS INGRESADOS");
          permitir_guardar = false;
        }
      }
      /////////////////////////////////////////////////////////////////////

      //Si Se Validan Los Campos Entonces Se Enviaran Los Campos A La Funcion Persona, 
      //Los Datos Se Imprimiran En La Tabla Con Un Limite De 5 Filas.
      if(permitir_guardar == true)
      {
        this.id++;
        var estructura = {id: this.id, nombre: this.nombre, apellido: this.apellido, edad: this.edad, correo: this.correo, permitir: false};
        this.personas.push(estructura)
        this.persona_.emit(this.personas);
        this.padreForm.reset();
        this.padreForm2.reset();
        this.padreForm3.reset();
        this.padreForm4.reset(); 
      }
    }
  }
}