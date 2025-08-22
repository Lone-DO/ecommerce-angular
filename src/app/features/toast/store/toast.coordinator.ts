import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { type AppState } from '../../../store';
import { addMessage, clearMessages, removeMessage } from './toast.actions';
import { selectToastMessages } from './toast.selectors';
import { type iToastItem } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ToastCoordinator {
  constructor(private store: Store<AppState>) {}

  selectMessages$(): Observable<iToastItem[]> {
    return this.store.select(selectToastMessages);
  }

  addMessage(toast: iToastItem): void {
    this.store.dispatch(addMessage({ toast }));
  }

  removeMessage(toast: iToastItem): void {
    this.store.dispatch(removeMessage({ toast }));
  }

  clearMessages(): void {
    this.store.dispatch(clearMessages());
  }
}
