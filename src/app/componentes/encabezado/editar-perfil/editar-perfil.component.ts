import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosPersonales } from 'src/app/model/datos-personales';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  //mapeo
  perfil: any = new DatosPersonales('','','','','');
  //servicio, activar la ruta con ID ,ruta 
  constructor(private servDatos: DatosPersonalesService, private activateRouter: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    const id= this.activateRouter.snapshot.params['id']
    this.servDatos.detail(id).subscribe(data =>{this.perfil = data})
  }

  onCreate(): void {
    const id= this.activateRouter.snapshot.params['id'];
    this.servDatos.detail(id).subscribe(data =>{this.perfil=data})
    this.servDatos.save(this.perfil).subscribe(data =>{
      alert("perfil editado");
      this.router.navigate(['']);
    })
  }

}
