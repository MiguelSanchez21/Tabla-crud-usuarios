import { Component, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { Persona } from '../altas/altas.component';
import { AppComponent } from '../app.component';
import { PrimerProyectoComponent } from '../primer-proyecto/primer-proyecto.component';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent{
  @Input() personas: Persona[] = [];
  arreglo_5_usuarios: Persona[] = [];
  parentSelector: boolean = false;

  lista = false;
  constructor(private comunicacion: PrimerProyectoComponent) { }

  ngOnInit(): void {
    this.comunicacion.enviar_arreglo_observable.subscribe(personas =>{
      this.parentSelector = false;
    })
  }

  private enviar_arreglo_ = new Subject<any>();

  enviar_arreglo_observable_ = this.enviar_arreglo_.asObservable();

  private abrir_eliminacion = new Subject<any>();

  eliminacion_observable = this.abrir_eliminacion.asObservable();

  palomita = false;

  aceptar_eliminacion = false;
  enviar_eliminar = 0;
  confirmar_eliminacion(eliminacion: boolean)
  {
    this.aceptar_eliminacion = eliminacion;
    this.eliminar(this.persona_borrar);
  }
  persona_borrar = [];
  borrar(persona: any)
  {
    this.persona_borrar = persona;
    this.abrir_eliminacion.next(this.enviar_eliminar);
    this.enviar_eliminar++;
  }
  eliminar(persona: any)
  {
    if(this.aceptar_eliminacion == true)
    {
      var cont = 0;
      this.personas.forEach((d) =>
      {
        if(persona.id == d.id)
        {
          this.personas.splice(cont, 1);
          this.enviar_arreglo_.next(this.personas);
        }
        cont++;
        return d;
      });
    }
  }
  limpiar(limpiar_checks: String)
  {
    console.log("limpiar");
    if(limpiar_checks == "tabla1")
    {
      this.personas.forEach((d) =>
      {
        d.permitir = false;
        this.parentSelector = false;
      });
    }
    this.lista = false;
  }
  cerrar(cerrar: String)
  {
    this.lista = false;
  }
  usuarios(e: Persona[])
  {
    this.arreglo_5_usuarios = e;
  }
  checks_total = 0;
  checks_sin_palomita = 0;
  abrir_modal = 0;
  modal_lista()
  {
    this.abrir_modal++;
    if(this.abrir_modal == 3)
    {
      this.abrir_modal = -1;
    }
  }
  cambio_check($event: any)
  {
    const id = $event.target.value;
    const isChecked  = $event.target.checked;
    this.checks_total = 0;
    this.checks_sin_palomita = 0;
    if(id != -1)
    {
      this.personas.forEach((d) =>
      {
        if(d.id == id)
        {
          d.permitir = isChecked;
        }
        if(d.permitir == true)
        {
          this.checks_total++;

          this.lista = true;

          if(this.checks_total == this.personas.length)
          {
            this.parentSelector = true;
          }
          if(this.checks_total < this.personas.length)
          {
            this.parentSelector = false;
          }
        }
        else
        {
          this.parentSelector = false;
          this.checks_sin_palomita++;
          if(this.checks_sin_palomita == this.personas.length)
          {
            this.lista = false;
          }
        }
      });
    }
    else if(id == -1)
    {
      if(this.parentSelector == true)
      {
        this.lista = true;
      }
      else
      {
        this.lista = false;
      }
      this.personas.forEach( (valor, indice) => {
        valor.permitir = this.parentSelector;
      })
    }
  }
}