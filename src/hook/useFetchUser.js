import { request } from '../api';

export async function fetchUser() {
  try {
    if (typeof window !== 'undefined' && window.__user) {
      return null;
    }
  } catch (err) {
    return null;
  }
}
