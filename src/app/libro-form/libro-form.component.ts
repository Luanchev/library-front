import { HttpClient } from '@angular/common/http';
import { LibraryService } from './../services/Library.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './libro-form.component.html',
  styleUrl: './libro-form.component.css'
})


export  default class LibroFormComponent {

  generos: any= [];


  formLibro : FormGroup= new FormGroup({
    titulo: new FormGroup(''),
    autor: new FormGroup(''),
    anio_publicacion: new FormGroup(''),
    genero: new FormGroup('')
  });

  constructor(private http: HttpClient){}

  onSaveLibro(){
    debugger;
    const obj = this.formLibro.value;
    this.http.post('http://localhost:8080/api/v1/library/registrarlibro/', obj).subscribe((res:any)=>){
      alert('Libro creado')
    }
  }



}
