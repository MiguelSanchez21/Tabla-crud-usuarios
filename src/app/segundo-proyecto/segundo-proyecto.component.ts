import { Component, OnInit } from '@angular/core';

import { SegundoService } from './segundo.service';

@Component({
  selector: 'app-segundo-proyecto',
  templateUrl: './segundo-proyecto.component.html',
  styleUrls: ['./segundo-proyecto.component.css']
})
export class SegundoProyectoComponent implements OnInit {
  //constructor(private SegundoService: SegundoService) { }

  //personas: any;
  heroes: any;
  ngOnInit(): void {
    /*this.SegundoService.getPersonas("assets/personas.json").subscribe((res: any) =>{
      console.log("c " + JSON.stringify(res));
      this.personas = res.personas;
      console.log("c "+ this.personas);
    });*/
    const jsonData = require("src/assets/personas.json"); 
    this.heroes = jsonData;
    var json = JSON.stringify(jsonData);
    console.log(json);
  }
}
