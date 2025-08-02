import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.scss'],
})
export class CounterControlsComponent {
  @Input() counter: number = 0;
  @Output() decrement: EventEmitter<void> = new EventEmitter();
  @Output() increment: EventEmitter<void> = new EventEmitter();
  onDecrement = () => this.decrement.emit();
  onIncrement = () => this.increment.emit();
}
