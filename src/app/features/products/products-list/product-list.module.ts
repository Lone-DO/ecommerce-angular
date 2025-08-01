import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../store/product.effects';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, EffectsModule.forFeature([ProductEffects])],
  exports: [ProductListComponent],
})
export class ProductListModule {}
