import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
proyURL = environment.apiURL + 'proy/'
  constructor(private httpCli: HttpClient) { }
//metodos 
//traer lista de proyectos
public lista():Observable<Proyecto[]>{
  return this.httpCli.get<Proyecto[]>(this.proyURL+'verProyectos');//es un vector de proyectos
}

//crear un proyecto
public save(proyecto: Proyecto): Observable<any>{
  return this.httpCli.post<any>(this.proyURL+'nuevoProyecto', proyecto);
}

//borrar
public delete(id: number): Observable<any>{
  return this.httpCli.delete<any>(this.proyURL+`delete/${id}`)
}

//traer un dato por id
public detail(id: number): Observable<Proyecto>{
  return this.httpCli.get<Proyecto>(this.proyURL+`traerProyecto/${id}`);
}

}
