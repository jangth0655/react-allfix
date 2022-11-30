import { useQuery } from '@tanstack/react-query';
import { fetchMovieCasts } from '../../../apis/movie-api';
import { fetchTVCasts } from '../../../apis/tv-api';
import { GetMovieCast } from '../../../model/interface/movie-interface';
import { GetTVCast } from '../../../model/interface/tv-interface';

import CastComp from '../CastComp';

interface CastSectionProps {
  movieId?: number;
  tvId?: number;
}

const CastSection: React.FC<CastSectionProps> = ({ movieId, tvId }) => {
  const { data: movieActorData } = useQuery<GetMovieCast>(
    ['movieActor', movieId],
    () => fetchMovieCasts(movieId),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!movieId }
  );

  const { data: tvActorData } = useQuery<GetTVCast>(
    ['tvActor', tvId],
    () => fetchTVCasts({ id: tvId }),
    { staleTime: 60 * 60 * 24 * 7, suspense: true, enabled: !!tvId }
  );

  return (
    <>
      {movieId
        ? movieActorData && <CastComp movieCastArray={movieActorData.cast} />
        : tvActorData && <CastComp tvCastArray={tvActorData.crew} />}
    </>
  );
};
export default CastSection;
