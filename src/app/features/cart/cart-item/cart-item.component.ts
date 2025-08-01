import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/features/cart/store/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem | undefined;
  constructor() {}

  ngOnInit(): void {}
}
