import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type iToastState } from '../models';

export const selectToastState = createFeatureSelector<iToastState>('toast');

export const selectToastMessages = createSelector(
  selectToastState,
  (state: iToastState) => state.messages
);
