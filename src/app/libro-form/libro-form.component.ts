import { LibraryService } from './../services/Library.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Genero } from '../genero-modelo/genero-modelo.component';

@Component({
  selector: 'app-libro-form',
  standalone: true,
  templateUrl: './libro-form.component.html',
  styleUrl: './libro-form.component.css'
})


export  default class LibroFormComponent implements OnInit{

  generos: Genero[] = [];


  form = this.fb.group({
    titulo: ['', [Validators.required]],
    autor: ['', [Validators.required]],
    anio_publicacion: ['', [Validators.required]],
    genero: ['', [Validators.required]]
  });

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private libroService : LibraryService
  ){}

  ngOnInit(): void{
    this.libroService.listGenero().subscribe(response => {
      this.generos = this.generos;
    });
  }
  create(){
    const libro = this.form.value;
    this.libroService.create(libro).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

}
