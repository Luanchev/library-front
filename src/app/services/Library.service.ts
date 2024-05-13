import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Genero } from '../genero-modelo/genero-modelo.component';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private http = inject(HttpClient);

  list(){
    return this.http.get('http://localhost:8080/api/v1/library');
  }
  listGenero(){
    return this.http.get< {value: Genero[]}>('http://localhost:8080/api/v1/genero');
  }
  get(id_libro: number){
    return this.http.get(`http://localhost:8080/api/v1/librar/getbyid/${id_libro}`);
  }
  create(libro: any){
    return this.http.post(`http://localhost:8080/api/v1/library/registrarlibro/`, libro);

  }
  update(id_libro: number, libro: any){
    return this.http.put(`http://localhost:8080/api/v1/library/actualizarlibro/${id_libro}`, libro);

  }
  delete(id_libro: number){
    return this.http.delete(`http://localhost:8080/api/v1/library/eliminarlibro/${id_libro}`);

  }

}
