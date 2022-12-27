import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../model/acerca-de';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  URL='http://localhost:8080/informacion/';

  constructor(private httpCli: HttpClient) { }

  public getInfo(): Observable<AcercaDe>{
    return this.httpCli.get<AcercaDe>(this.URL +"traerInfo");
  }

  //grabar o editar mi perfil 
  public save(info: AcercaDe): Observable<any>{
  return this.httpCli.post<any>(this.URL + 'crearInfo', info);
  }

  //borrar mi perfil
  public delete(id?: number): Observable<any>{
  return this.httpCli.delete<any>(this.URL + `delete/${id}`);
  }
}

