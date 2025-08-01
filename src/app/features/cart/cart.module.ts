import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart.routing.module';
import { CartListModule } from 'src/app/features/cart/cart-list/cart-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, CartRoutingModule, CartListModule, RouterModule],
})
export class CartModule {}
