import { AnimatePresence } from 'framer-motion';
import { useList } from '../../hooks/useFetchData';

import { GetMovies } from '../../model/interface/movie_interface';
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
  const { isLoading, list } = useList<GetMovies>();

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
                {list?.results.map((movie) => (
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
