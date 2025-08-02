import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type iCartItem } from '../models';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item: iCartItem | null = null;
  @Input() hideData: boolean = false;
  @Output() decrement: EventEmitter<void> = new EventEmitter();
  @Output() increment: EventEmitter<void> = new EventEmitter();

  // TODO: Add Fetch to retrieve Product image from Products Store, and render in Cart

  onDecrement = () => this.decrement.emit();
  onIncrement = () => this.increment.emit();
}
