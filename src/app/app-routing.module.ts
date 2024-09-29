import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'brand',
    loadComponent: () =>
      import('./pages/brand/brand.component').then((m) => m.BrandComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (m) => m.ProductsComponent,
      ),
  },
  {
    path: 'ice-powder',
    loadComponent: () =>
      import('./pages/ice/ice.component').then((m) => m.IceComponent),
  },
  {
    path: 'standard-powder',
    loadComponent: () =>
      import('./pages/standard/standard.component').then(
        (m) => m.StandardComponent,
      ),
  },
  {
    path: 'premium-powder',
    loadComponent: () =>
      import('./pages/premium/premium.component').then(
        (m) => m.PremiumComponent,
      ),
  },
  {
    path: 'granita',
    loadComponent: () =>
      import('./pages/granita/granita.component').then(
        (m) => m.GranitaComponent,
      ),
  },
  {
    path: 'topping',
    loadComponent: () =>
      import('./pages/topping/topping.component').then(
        (m) => m.ToppingComponent,
      ),
  },
  {
    path: 'accessories',
    loadComponent: () =>
      import('./pages/accessories/accessories.component').then(
        (m) => m.AccessoriesComponent,
      ),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
