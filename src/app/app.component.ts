import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ToastCoordinator } from './core/store/toast/toast.coordinator';
import { iToastItem } from './core/store/toast/toast.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  title = 'Take Home Challenge';

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
