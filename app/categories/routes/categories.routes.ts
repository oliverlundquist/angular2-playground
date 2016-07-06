import { RouterConfig } from '@angular/router';

import { CategoriesComponent } from '../categories.component';

export const CategoriesRoutes: RouterConfig = [
  { path: 'categories/:id', component: CategoriesComponent }
];
