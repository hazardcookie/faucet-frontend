import { writable } from 'svelte/store';

const newLoading = () => {
  const { subscribe, update, set } = writable({
    status: 'IDLE', // IDLE, LOADING, NAVIGATING
    message: ''
  });

  function setLoading(isLoading: boolean, message = '') {
    update(() => {
      return {
        status: isLoading ? 'LOADING' : 'IDLE',
        message: isLoading ? message : ''
      };
    });
  }

  return { subscribe, set, setLoading };
};

export const loading = newLoading();
