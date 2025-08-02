import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartListComponent } from './cart-list.component';
import { QuantitySumPipe } from '../pipes/quantity-sum.pipe';
import { SharedModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [CartListComponent, CartItemComponent, QuantitySumPipe],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [CartListComponent, CartItemComponent],
})
export class CartListModule {}
