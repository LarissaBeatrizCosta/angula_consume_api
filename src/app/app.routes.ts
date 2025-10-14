import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Empresas } from './pages/empresas/empresas';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'empresas', component: Empresas },
];
