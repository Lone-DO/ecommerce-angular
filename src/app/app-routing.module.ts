import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'cart',
    loadChildren: async () => {
      const m = await import('./features/cart/cart.module');
      return m.CartModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
