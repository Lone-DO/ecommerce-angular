import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ToastState} from './toast.reducer';

export const selectToastState = createFeatureSelector<ToastState>('toast');

export const selectToastMessages= createSelector(
  selectToastState,
  (state: ToastState) => state.messages
);
