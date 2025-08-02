import { createAction, props } from '@ngrx/store';

export type iToastMode = 'success' | 'warning' | 'error' | 'info';
export interface iToastItem {
  message: string;
  mode: iToastMode;
  duration?: number
  id?:number
}

export const addMessage = createAction(
  '[Toast] Add Message',
  props<{ toast: iToastItem }>()
);

export const removeMessage = createAction(
  '[Toast] Remove Message',
  props<{ toast: iToastItem }>()
);

export const clearMessages = createAction('[Toast] Clear All Messages');
