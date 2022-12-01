import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { GetTVs } from '../../model/interface/tv_interface';
import MovieAndTV from '../MovieAndTV';
import { TotalContainer } from '../sharedStyled';

interface TVSearchProps {
  keyword: string;
}

const TVSearch: React.FC<TVSearchProps> = ({ keyword }) => {
  return (
    <TotalContainer>
      {[].map((tv, i) => (
        <MovieAndTV key={i} tv={tv} />
      ))}
    </TotalContainer>
  );
};
export default TVSearch;
