import { Routes } from '@angular/router';

import { DashboardPage } from './pages/dashboard/dashboard.page';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
