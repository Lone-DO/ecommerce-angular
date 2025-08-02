import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ToastCoordinator } from '../store/toast.coordinator';
import { iToastItem } from '../store/toast.actions';

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss'],
})
export class ToastItemComponent implements OnDestroy, OnInit {
  @Input() toast: iToastItem | undefined;
  @ViewChild('dialog') $el: ElementRef<HTMLDialogElement> | undefined;
  @Output() expired: EventEmitter<iToastItem> = new EventEmitter();
  timer: NodeJS.Timeout | undefined;

  constructor(public toastCoordinator: ToastCoordinator) {}
  dismiss() {
    // @ts-ignore outdated typescript compiler does not recognize native handlers for dialog element
    this.$el?.nativeElement.close();
  }
  ngOnInit(): void {
    if (this.toast) {
      this.timer = setTimeout(
        () => this.toastCoordinator.removeMessage(this.toast as iToastItem),
        this.toast.duration || 3000
      );
    }
  }
  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
