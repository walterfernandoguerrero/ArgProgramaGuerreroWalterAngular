import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPersonales } from 'src/app/model/datos-personales';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  datos: DatosPersonales = new DatosPersonales (" "," "," "," "," ");
  
  constructor(private datosServ: DatosPersonalesService, private router:Router ) { }

  ngOnInit(): void {
    
    this.datosServ.getDatos().subscribe(data => {this.datos = data
    console.log(this.datos)})
  }
//no borrar
  login(): void{
    this.router.navigate(['/login'])
  }
  // boton para ir a pagina editar
  editar(): void{
    this.router.navigate(['/pagEditPerfil/:id'])
  }

}
