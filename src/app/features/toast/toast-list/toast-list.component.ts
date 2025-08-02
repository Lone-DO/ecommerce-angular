import { Component, OnDestroy } from '@angular/core';
import { ToastCoordinator } from '../store/toast.coordinator';
import { iToastItem } from '../store/toast.actions';

@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.scss'],
})
export class ToastListComponent implements OnDestroy {
  toast$$: any;

  toastMessages: iToastItem[] = [];

  constructor(public toastCoordinator: ToastCoordinator) {
    this.toast$$ = this.toastCoordinator
      .selectMessages$()
      .subscribe((messages) => {
        this.toastMessages = messages;
      });
  }

  clearToast(toast: iToastItem) {
    this.toastCoordinator.removeMessage(toast);
  }

  ngOnDestroy(): void {
    this.toast$$.unsubscribe();
  }
}
