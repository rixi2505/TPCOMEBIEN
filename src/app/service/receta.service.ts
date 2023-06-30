import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Receta } from '../model/recetas';
import { Usuario } from '../model/usuarios';

const baseUrl = environment.base;


@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private url = `${baseUrl}`;
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080/api'});
  constructor(private http:HttpClient) { } //inyectar httpClient
  private listaCambio = new Subject<Receta[]>();


  list():Observable<any>{
    return this.http.get<Receta[]>(this.url+"/recetas"); //http://localhost:5000/authors
  }

  insert(receta : Receta){
     return this.http.post(this.url+"/receta", receta);
  }
  delete(id:string){
    return this.http.delete(this.url + "/receta/" + id);
  }
  listId(id:number){
    return this.http.get<Receta>(`${this.url+ "/receta"}/${id}`);
  }
  listName(name:string){
    return this.http.get<Receta[]>(`${this.url+"/recetas"}/${name}`);
  }
  update(rec: Receta){
    return this.http.put(this.url+"/receta", rec);
  }
  setList(listaNueva: Receta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }



}
