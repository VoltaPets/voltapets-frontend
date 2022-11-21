// Librerías
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

// Relative Imports
import { request } from '../api';
import { USER_TOKEN } from '../api/endpoints/Usuario';

export async function fetchUser() {
  try {
    if (typeof window !== 'undefined' && window.__user) {
      return window.__user;
    }

    if (!localStorage.getItem('token')) {
      delete window.__user;
      return null;
    }

    const { data: userData } = await request({
      method: 'GET',
      url: USER_TOKEN
    });

    if (!userData) {
      delete window.__user;
      return null;
    }

    if (typeof window !== 'undefined') {
      window.__user = userData;
    }
    return userData;
  } catch (err) {
    delete window.__user;
    return null;
  }
}

export function useFetchUser({ required, nextPage, tutorRequired, paseadorRequired } = {}) {
  // Estados
  const [loading, setLoading] = useState(() => !(typeof window !== 'undefined' && window.__user));
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null;
    return window.__user || null;
  });
  
  // Hooks
  const { replace } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  // Efectos
  useEffect(() => {
    if (!loading && user) return;

    setLoading(true);
    let isMounted = true;

    fetchUser().then(async (user) => {
      if (isMounted) {
        if (required && !user) {
          if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
          }
          const nextRoute = nextPage || '/';
          await replace(`/usuarios/login?next=${nextRoute}`);
          setLoading(false);
          return;
        }
        if (tutorRequired && user && user.rol !== 'Tutor') {
          enqueueSnackbar('No tienes permisos para acceder a esta página', { variant: 'error' });
          await replace('/');
          setLoading(false);
          return;
        }

        if (paseadorRequired && user && user.rol !== 'Paseador') {
          enqueueSnackbar('No tienes permisos para acceder a esta página', { variant: 'error' });
          await replace('/');
          setLoading(false);
          return;
        }

        setUser(user);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { loading, user };
}
