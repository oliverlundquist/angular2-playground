import { provideRouter, RouterConfig } from '@angular/router';

import { CategoriesRoutes } from './categories/routes/categories.routes';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/categories/1', pathMatch: 'full'},
  ...CategoriesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
