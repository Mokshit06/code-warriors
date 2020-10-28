import useSWR from 'swr';
import { fetcher } from 'lib/fetcher';

export default function useCourses(id) {
  const url = `/api/courses${id ? `/${id}` : ''}`;
  const { data, error, mutate } = useSWR(url, fetcher);
  return {
    courses: data,
    error,
    mutateCourses: mutate,
  };
}
