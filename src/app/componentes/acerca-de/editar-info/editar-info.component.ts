import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-editar-info',
  templateUrl: './editar-info.component.html',
  styleUrls: ['./editar-info.component.css']
})
export class EditarInfoComponent implements OnInit {

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

