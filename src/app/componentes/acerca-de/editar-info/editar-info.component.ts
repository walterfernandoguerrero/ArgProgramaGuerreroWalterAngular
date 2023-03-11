import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-editar-info',
  templateUrl: './editar-info.component.html',
  styleUrls: ['./editar-info.component.css']
})
export class EditarInfoComponent implements OnInit {

  //validacion de datos 
  texto:any = /^.{4,250}$/;

  parrafo1Ctrl=new FormControl('',[Validators.required, Validators.pattern(this.texto)]);
  parrafo2Ctrl=new FormControl('',[Validators.required, Validators.pattern(this.texto)]);
  parrafo3Ctrl=new FormControl('',[Validators.required, Validators.pattern(this.texto)]);
  parrafo4Ctrl=new FormControl('',[Validators.required, Validators.pattern(this.texto)]);
  parrafo5Ctrl=new FormControl('',[Validators.required, Validators.pattern(this.texto)]);

  //

  info: any= new AcercaDe("","","","","");

  constructor(private infoServ: AcercaDeService, private activateR: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activateR.snapshot.params['id']
    this.infoServ.getInfo().subscribe(data =>{this.info = data})
  }

  onCreate(): void {
    const id= this.activateR.snapshot.params['id'];
    this.infoServ.getInfo().subscribe(data =>{this.info=data})
    this.infoServ.save(this.info).subscribe(data =>{
      alert("perfil editado");
      this.router.navigate(['']);
    })
  }
}

