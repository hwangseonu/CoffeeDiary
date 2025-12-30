import { writable } from 'svelte/store';

type AlertType = 'success' | 'error' | 'info';

interface AlertState {
  open: boolean;
  type: AlertType;
  title: string;
  message: string;
}

const initialState: AlertState = { open: false, type: 'info', title: '', message: '' };

export const alertStore = writable<AlertState>(initialState);

export async function showAlert(alert: Omit<AlertState, 'open'>): Promise<void> {
  alertStore.set({ open: true, ...alert });

  return new Promise((resolve) => {
    const unsubscribe = alertStore.subscribe((state) => {
      if (!state.open) {
        unsubscribe();
        resolve();
      }
    });
  });
}

export function closeAlert() {
  alertStore.set(initialState);
}
