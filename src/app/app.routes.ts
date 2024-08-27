import { Routes } from '@angular/router';

import { isAuthenticated } from './core/guards/is.authenticated.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
    canActivate: [isAuthenticated],
  },
  {
    path: 'authentication',
    loadComponent: () =>
      import('./pages/authentication/authentication.page').then(
        (m) => m.AuthenticationPage
      ),
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
