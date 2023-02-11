import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lenguajes } from 'src/app/model/lenguajes';
import { LenguajeService } from 'src/app/servicios/lenguaje.service';

@Component({
  selector: 'app-editar-lenguaje',
  templateUrl: './editar-lenguaje.component.html',
  styleUrls: ['./editar-lenguaje.component.css']
})
export class EditarLenguajeComponent implements OnInit {
  lenguaje:any =new Lenguajes('',null);
  constructor(private lengServ: LenguajeService, private activatedRouter: ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.lengServ.details(id).subscribe(
      data =>{
        this.lenguaje = data;
        console.log(data); 
      }, err =>{
        alert("Error al traer los datos");
        this.router.navigate(['']);
      }
    )
  }
  
  onCreate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
     this.lengServ.details(id).subscribe(
       data =>{
         this.lenguaje = data;
       }
     )
     this.lengServ.save(this.lenguaje).subscribe(
       data =>{
         alert("Lenguaje  Editado");
         this.router.navigate(['']);
       }
     )
   }

}
