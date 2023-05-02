import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Receta } from '../model/recetas';

const baseUrl = environment.base;


@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private url = `${baseUrl}/recetas`;
  constructor(private http:HttpClient) { }

  list():Observable<any>{
    return this.http.get<Receta[]>(this.url); //http://localhost:5000/authors
  }

  insert(author : Receta){
     return this.http.post(this.url, author);
  }
  delete(id:string){
    return this.http.delete(this.url + "/" + id);
  }
  listId(id:number){
    return this.http.get<Receta>(`${this.url}/${id}`);
  }
  update(aut: Receta){
    return this.http.put(this.url+"/"+aut.id, aut);
  }




}
