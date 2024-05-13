import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lista-libros/lista-libros.component')
  },
  {
    path: 'new',
    loadComponent: () => import('./libro-form/libro-form.component')
  }
  ];

  export { routes };
