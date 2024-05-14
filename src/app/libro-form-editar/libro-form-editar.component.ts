import { LibraryService } from '../services/Library.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { Genero } from '../genero-modelo/genero-modelo.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-libro-form-editar',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './libro-form-editar.component.html',
  styleUrl: './libro-form-editar.component.css'
})


export  default class LibroFormComponent implements OnInit{

  generos: Genero[]= [];
  idLibro: any;
  libros: any[] = [];
  libro: any;

  formLibro : FormGroup= this.fb.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    anio_publicacion: ['', Validators.required],
    genero: ['', Validators.required]
  });

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private libroService : LibraryService,
    private libraryService: LibraryService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.idLibro = this.route.snapshot.paramMap.get('id');

    this.libroService.listGenero().subscribe(response => {
    this.generos = response;
    });

    this.libraryService.list().subscribe((libros: any) =>{
      this.libros = this.libros;
      console.log(libros);
      this.libros = libros;
      this.libro = this.libros.filter(libro => libro.id_libro == this.idLibro);

      this.formLibro.controls['titulo'].setValue(this.libro[0].titulo);
      this.formLibro.controls['autor'].setValue(this.libro[0].autor);
      let date = this.extractDate(this.libro[0].anio_publicacion);
      this.formLibro.controls['anio_publicacion'].setValue(date);
      this.formLibro.controls['genero'].setValue(this.libro[0].genero.id_genero);
    })

  }
  update(){
    const libro = {
      "titulo": this.formLibro.value.titulo,
      "autor": this.formLibro.value.autor,
      "anio_publicacion": this.formLibro.value.anio_publicacion,
      "genero": +this.formLibro.value.genero
    }

    this.formLibro.value;
    this.libroService.update(this.idLibro, libro).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }


  extractDate(isoString: string): string {
    return isoString.split('T')[0];
  }

}
