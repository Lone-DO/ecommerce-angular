import { createAction, props } from '@ngrx/store';
import { type iToastItem } from '../models';

export const addMessage = createAction(
  '[Toast] Add Message',
  props<{ toast: iToastItem }>()
);

export const removeMessage = createAction(
  '[Toast] Remove Message',
  props<{ toast: iToastItem }>()
);

export const clearMessages = createAction('[Toast] Clear All Messages');
