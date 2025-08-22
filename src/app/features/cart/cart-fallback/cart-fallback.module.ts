import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartFallbackComponent } from './cart-fallback.component';
import { CartFallbackRoutingModule } from './cart-fallback.routing.module';

@NgModule({
  declarations: [CartFallbackComponent],
  imports: [CommonModule, CartFallbackRoutingModule, RouterModule],
  exports: [CartFallbackComponent],
})
export class CartFallbackModule {}
