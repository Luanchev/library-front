import { LibraryService } from './../services/Library.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './libro-form.component.html',
  styleUrl: './libro-form.component.css'
})


export  default class LibroFormComponent implements OnInit{

  generos: any= [];


  formLibro : FormGroup= this.fb.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    anio_publicacion: ['', Validators.required],
    genero: [0, Validators.required]
  });

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private libroService : LibraryService
  ){}

  ngOnInit(): void{
    console.log(this.generos)
    this.libroService.listGenero().toPromise().then(response => {
      console.log(response);
      this.generos = response;
    });
    console.log(this.generos)
  }
  create(){
    const libro = this.formLibro.value;
    this.libroService.create(libro).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

}
