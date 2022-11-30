import React, { Suspense, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import MainTitleContainer, {
  CategoryTapType,
} from '../../components/MainTitleContainer';
import { AnimatePresence } from 'framer-motion';
import {
  ComponentContainer,
  containerVar,
} from '../../components/sharedStyled';
import Loading from '../../components/Loading';

import { Helmet } from 'react-helmet-async';

const categoryTapTextArray: CategoryTapType[] = [
  {
    title: '인기 TV',
    subtitle: '현재 인기 있는 TV 목록',
  },
  {
    title: '현재 방영중',
    subtitle: '현재 방영중인 TV 목록',
  },

  {
    title: '평점높은 TV',
    subtitle: '평점 높은 영TV 목록',
  },
];

export const pageNumbers = [1, 2, 3, 4, 5];

const TVs: React.FC = () => {
  const [tapName, setTapName] = useState<CategoryTapType>({
    title: '인기 TV',
    subtitle: '현재 인기 있는 TV 목록',
  });

  const PopularTVs = React.lazy(
    () => import('../../components/tvList/PopularTVs')
  );

  const NowPlayingTVs = React.lazy(
    () => import('../../components/tvList/NowPlayingTVs')
  );

  const TopRatedTVs = React.lazy(
    () => import('../../components/tvList/TopRatedTVs')
  );

  const handleTap = (title?: string, subtitle?: string) => {
    if (!title || !subtitle) return;
    setTapName({ title, subtitle });
  };

  return (
    <Layout isMainPaddingTop={true}>
      <Helmet>
        <title>{`${tapName.title}-AllFlix`}</title>
      </Helmet>
      <MainTitleContainer />
      <AnimatePresence>
        {tapName.title === '인기 TV' ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <PopularTVs />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === '현재 방영중' ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <NowPlayingTVs />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === '평점높은 TV' ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <TopRatedTVs />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>
    </Layout>
  );
};
export default TVs;
