import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { QUERY_KEY } from '../model/types';

const useMovies = () => {
  const [query, _] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.CURRENT);
  const {} = useQuery(['']);
};
export default useMovies;
