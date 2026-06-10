import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/hero/hero').then(m => m.HeroComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];