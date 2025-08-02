import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartGuard } from './Guard/cart.guard';

export const routes: Routes = [
  { path: '', component: CartListComponent, canActivate: [CartGuard] },
  {
    path: '**',
    loadChildren: async () => {
      const m = await import('./cart-fallback/cart-fallback.module');
      return m.CartFallbackModule;
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
