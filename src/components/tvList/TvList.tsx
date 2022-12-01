import { AnimatePresence } from 'framer-motion';

import { useList } from '../../hooks/useFetchData';
import { GetTVs } from '../../model/interface/tv-interface';
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

const TvList = () => {
  const { isLoading, list } = useList<GetTVs>();

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
                {list?.results.map((tv) => (
                  <MovieAndTV key={tv.id} tv={tv} />
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
export default TvList;
