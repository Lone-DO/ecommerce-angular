import { Component, OnDestroy } from '@angular/core';
import { ToastCoordinator } from '../store/toast.coordinator';
import { type Subscription } from 'rxjs';
import { type iToastItem } from '../models';

@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.scss'],
})
export class ToastListComponent implements OnDestroy {
  toast$$: Subscription | undefined;
  toastMessages: iToastItem[] = [];
  /** TODO: Use a single instance of HTMLDialogElement, and propagate latest toast message instead of generating multiple?
   * Would avoid overlapping toast
   */
  constructor(public toastCoordinator: ToastCoordinator) {
    this.toast$$ = this.toastCoordinator
      .selectMessages$()
      .subscribe((messages) => {
        this.toastMessages = messages;
      });
  }

  ngOnDestroy(): void {
    this.toast$$?.unsubscribe();
  }

  clearToast(toast: iToastItem) {
    this.toastCoordinator.removeMessage(toast);
  }
}
