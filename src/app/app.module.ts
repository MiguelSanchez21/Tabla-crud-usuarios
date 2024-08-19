import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AltasComponent } from './altas/altas.component';
import { TablasComponent } from './tablas/tablas.component';
import { ModalMostrarComponent } from './modal-mostrar/modal-mostrar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimerProyectoComponent } from './primer-proyecto/primer-proyecto.component';
import { SegundoProyectoComponent } from './segundo-proyecto/segundo-proyecto.component';

import { SegundoService } from './segundo-proyecto/segundo.service';
import {HttpClientModule} from '@angular/common/http';
const appRoutes: Routes=[
  {path:'', component: PrimerProyectoComponent},
  {path:'Segundo_Proyecto', component: SegundoProyectoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AltasComponent,
    TablasComponent,
    ModalMostrarComponent,
    ModalEliminarComponent,
    PaginacionComponent,
    BuscarComponent,
    PrimerProyectoComponent,
    SegundoProyectoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [SegundoService],
  bootstrap: [AppComponent]
})
export class AppModule { }