import { createReducer, on } from '@ngrx/store';
import { addMessage, removeMessage, type iToastItem, clearMessages } from './toast.actions';

export interface ToastState {
  messages: iToastItem[];
}

export const initialState: ToastState = {
  messages: [],
};

export const toastReducer = createReducer(
  initialState,
  on(addMessage, (state, { toast }) => {
    const item = { id: Date.now(), ...toast }
    return { ...state, messages: state.messages.concat(item)}
  }),

  on(removeMessage, (state, { toast }) => {
    return { ...state, messages: state.messages.filter((item) => item.id !== toast.id) };
  }),

  on(clearMessages, (state) => ({
    ...state,
    messages: [],
  }))
);
