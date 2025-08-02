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
import { iToastItem } from '../../store/toast/toast.actions';
import { ToastCoordinator } from '../../store/toast/toast.coordinator';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnDestroy, OnInit {
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
        () => this.expired.emit(this.toast),
        this.toast.duration || 3000
      );
    }
  }
  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
