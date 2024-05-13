import { LibraryService } from './../services/Library.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { Genero } from '../genero-modelo/genero-modelo.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './libro-form.component.html',
  styleUrl: './libro-form.component.css'
})


export  default class LibroFormComponent implements OnInit{

  generos: Genero[]= [];

  formLibro : FormGroup= this.fb.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    anio_publicacion: ['', Validators.required],
    genero: ['', Validators.required]
  });

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private libroService : LibraryService
  ){}

  ngOnInit(): void{
    this.libroService.listGenero().subscribe(response => {
    this.generos = response;
    });
  }
  create(){
    const libro = this.formLibro.value;
    this.libroService.create(libro).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

}
