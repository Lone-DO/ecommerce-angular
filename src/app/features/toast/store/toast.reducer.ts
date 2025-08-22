import { createReducer, on } from '@ngrx/store';
import { addMessage, removeMessage, clearMessages } from './toast.actions';
import { type iToastState } from '../models';

export const initialState: iToastState = {
  messages: [],
};

export const toastReducer = createReducer(
  initialState,
  on(addMessage, (state, { toast }) => {
    const item = { id: Date.now(), ...toast };
    return { ...state, messages: state.messages.concat(item) };
  }),

  on(removeMessage, (state, { toast }) => {
    return {
      ...state,
      messages: state.messages.filter((item) => item.id !== toast.id),
    };
  }),

  on(clearMessages, (state) => ({
    ...state,
    messages: [],
  }))
);
