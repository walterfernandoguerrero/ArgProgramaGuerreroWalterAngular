import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lenguajes } from '../model/lenguajes';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {
  URL= 'http://localhost:8080/lenguaje/';

  constructor(private httpCli:HttpClient) { }

  //mis metodos 
  public lista():Observable<Lenguajes[]>{
    return this.httpCli.get<Lenguajes[]>(this.URL+'verLenguajes');
  }

  public details(id:number):Observable<Lenguajes>{
    return this.httpCli.get<Lenguajes>(this.URL+`buscarLenguaje/${id}`);
  }

  public save(leng: Lenguajes):Observable<any>{
    return this.httpCli.post<any>(this.URL+'nuevoLenguaje', leng);
  }

  public delete(id:number):Observable<any>{
    return this.httpCli.delete<any>(this.URL+`borrarLenguaje/${id}`);
  }
}
