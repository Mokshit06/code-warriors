import api from 'lib/axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'lib/fetcher';

// const fetcher = async url => {
//   try {
//     const { data } = await api.get(url);

//     return data;
//   } catch (error) {
//     return null;
//   }
// };

export default function useAuth() {
  const { data, error, mutate } = useSWR('/api/users/me', fetcher);
  const router = useRouter();

  const login = () => {
    if (typeof window !== 'undefined') {
      const consentURL = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

      window.open(consentURL, '__blank', 'width=500&height=800');
      window.addEventListener('message', event => {
        if (event.data === 'success') {
          mutate();
        }
      });
    }
  };

  const logout = async () => {
    try {
      await api.get('/auth/logout');
      mutate();
      router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isAuthenticated: !error && !!data,
    user: data,
    login,
    error,
    logout,
    loading: !error && !data,
  };
}
