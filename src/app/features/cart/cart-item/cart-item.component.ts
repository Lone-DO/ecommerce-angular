import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../store/cart.actions';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item: CartItem | null = null;
  @Output() decrement: EventEmitter<void> = new EventEmitter();
  @Output() increment: EventEmitter<void> = new EventEmitter();

  onDecrement = () => this.decrement.emit();
  onIncrement = () => this.increment.emit();
}
