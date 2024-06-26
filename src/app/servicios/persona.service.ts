import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = environment.apiURL;
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer/perfil' );
  }

  //traer lista de mis datos de personas
public lista():Observable<persona[]>{
  return this.http.get<persona[]>(this.URL+'ver/personas');//es un vector con la tabla de personas
}

}
