import { AnimatePresence } from 'framer-motion';
import { useTVs } from '../../hooks/useTVs';
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
  const { isLoading, tvs } = useTVs<GetTVs>();

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
                {tvs?.results.map((tv) => (
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
