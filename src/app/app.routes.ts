import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CompaniesView } from './pages/companies/companies';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'empresas', component: CompaniesView },
];
