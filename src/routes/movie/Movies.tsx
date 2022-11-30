import React, { Suspense, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { AnimatePresence } from 'framer-motion';
import Loading from '../../components/Loading';
import MainTitleContainer, {
  CategoryTapType,
} from '../../components/MainTitleContainer';
import {
  ComponentContainer,
  containerVar,
} from '../../components/sharedStyled';
import { Helmet } from 'react-helmet-async';

export const pageNumbers = [1, 2, 3, 4, 5];

const Movies = () => {
  const [tapName, setTapName] = useState<CategoryTapType>({
    title: '인기 영화',
    subtitle: '현재 인기 있는 영화 목록',
  });

  const PopularMovies = React.lazy(
    () => import('../../components/movieList/PopularMovies')
  );

  const NowPlayingMovies = React.lazy(
    () => import('../../components/movieList/NowPlayingMovies')
  );

  const UpcomingMovies = React.lazy(
    () => import('../../components/movieList/UpcomingMovies')
  );

  const TopRatedMovies = React.lazy(
    () => import('../../components/movieList/TopRatedMovies')
  );

  return (
    <Layout isMainPaddingTop={true}>
      <Helmet>
        <title>{`${tapName.title}-AllFlix`}</title>
      </Helmet>
      <MainTitleContainer />
      <AnimatePresence>
        {tapName.title === '인기 영화' ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <PopularMovies />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === '현재 상영중' ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <NowPlayingMovies />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === '개봉 예정' ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <UpcomingMovies />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === '평점높은 영화' ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <TopRatedMovies />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>
    </Layout>
  );
};
export default Movies;
