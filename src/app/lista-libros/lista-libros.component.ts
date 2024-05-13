import { DatePipe, CommonModule } from '@angular/common';
import { LibraryService } from './../services/Library.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [DatePipe,CommonModule, RouterModule ],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export default class ListaLibrosComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}

   libros: any[] = [];


  ngOnInit(): void {
      this.libraryService.list().subscribe((libros: any) =>{
        this.libros = this.libros;
        console.log(libros);
        this.libros = libros;
      })

  }
}




