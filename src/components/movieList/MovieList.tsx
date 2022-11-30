import { AnimatePresence } from 'framer-motion';

import { useMovies } from '../../hooks/useMovies';
import { GetMovies } from '../../model/interface/movie-interface';
import Layout from '../Layout/Layout';
import Loading from '../Loading';
import MainTitleContainer from '../MainTitleContainer';
import MovieAndTV from '../MovieAndTV';
import Pagination from '../Pagination';
import {
  ComponentContainer,
  containerVar,
  TotalContainer,
} from '../sharedStyled';

const MovieList = () => {
  const { isLoading, movies } = useMovies<GetMovies>();
  return (
    <Layout isMainPaddingTop={true}>
      <MainTitleContainer />
      <AnimatePresence>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ComponentContainer
              variants={containerVar}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <TotalContainer>
                {movies?.results.map((movie) => (
                  <MovieAndTV key={movie.id} movie={movie} />
                ))}
              </TotalContainer>
            </ComponentContainer>
            <Pagination />
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};
export default MovieList;
