import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastListComponent } from './toast-list/toast-list.component';
import { ToastItemComponent } from './toast-item/toast-item.component';

@NgModule({
  declarations: [ToastListComponent, ToastItemComponent],
  imports: [CommonModule],
  exports: [ToastListComponent, ToastItemComponent],
})
export class ToastModule {}
