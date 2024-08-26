import { Routes } from '@angular/router';

import { isAuthenticated } from './core/guards/is.authenticated.guard';
import { AuthenticationPage } from './pages/authentication/authentication.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => DashboardPage,
    canActivate: [isAuthenticated],
  },
  {
    path: 'authentication',
    loadComponent: () => AuthenticationPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'authentication',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'authentication',
  },
];
