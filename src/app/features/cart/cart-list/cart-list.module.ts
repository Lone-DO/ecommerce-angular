import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from 'src/app/features/cart/cart-item/cart-item.component';
import { CartListComponent } from 'src/app/features/cart/cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [CartListComponent, CartItemComponent],
})
export class CartListModule {}
