import { AnimatePresence } from 'framer-motion';

import { useList } from '../hooks/useFetchData';
import { MovieWithTvList } from '../model/interface/shared_interface';
import Layout from './Layout/Layout';
import Loading from './Loading';
import MainTitleContainer from './MainTitleContainer';
import MovieAndTV from './MovieAndTV';
import Pagination from './Pagination';
import {
  ComponentContainer,
  containerVar,
  TotalContainer,
} from './sharedStyled';

const List = () => {
  const { isLoading, list, errors } = useList<MovieWithTvList>();
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
                {errors ? (
                  <h1>{errors}</h1>
                ) : (
                  list?.results.map((result) => (
                    <MovieAndTV key={result.id} result={result} />
                  ))
                )}
              </TotalContainer>
            </ComponentContainer>
            <Pagination />
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};
export default List;
