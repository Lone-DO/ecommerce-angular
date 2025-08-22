export interface iToastItem {
  message: string;
  mode: iToastMode;
  duration?: number;
  id?: number;
}

export interface iToastState {
  messages: iToastItem[];
}

export type iToastMode = 'success' | 'warning' | 'error' | 'info';
