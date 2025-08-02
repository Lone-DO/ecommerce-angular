import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../store/product.effects';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ShortenTextPipe } from '../pipes/shorten-text.pipe';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, ShortenTextPipe],
  imports: [CommonModule, EffectsModule.forFeature([ProductEffects])],
  exports: [ProductListComponent, ProductItemComponent],
})
export class ProductListModule {}
