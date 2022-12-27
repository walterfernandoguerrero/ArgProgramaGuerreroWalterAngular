import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 info: AcercaDe = new AcercaDe(" "," "," "," "," ");
 
 constructor(private infServ: AcercaDeService, private router:Router){ }

 ngOnInit(): void {
    this.infServ.getInfo().subscribe(data => {this.info = data})
 }
 
 // boton para ir a pagina editar
  editar(): void{
  this.router.navigate(['/pagEditInfo/:id'])
}
}
