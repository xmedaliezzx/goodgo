import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shop-navigator/shop-navigator.component').then(
        (c) => c.ShopNavigatorComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./containers/landing/landing.component').then(
            (c) => c.LandingComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
