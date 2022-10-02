import React, { Suspense, useState } from "react";
import Layout from "../../components/Layout";
import { AnimatePresence } from "framer-motion";
import Loading from "../../components/Loading";
import PageNumber from "../../components/PageNumber";
import MainTitleContainer, {
  CategoryTapType,
} from "../../components/MainTitleContainer";
import {
  ComponentContainer,
  containerVar,
  MoreButtonContainer,
} from "../../components/sharedStyled";
import { Helmet } from "react-helmet-async";

const categoryTapTextArray: CategoryTapType[] = [
  {
    title: "인기 영화",
    subtitle: "현재 인기 있는 영화 목록",
  },
  {
    title: "현재 상영중",
    subtitle: "현재 상영중인 영화 목록",
  },
  {
    title: "개봉 예정",
    subtitle: "개뵹 예정 영화 목록",
  },
  {
    title: "평점높은 영화",
    subtitle: "평점 높은 영화 목록",
  },
];

const pageNumbers = [1, 2, 3, 4, 5];

const Movies = () => {
  const [tapName, setTapName] = useState<CategoryTapType>({
    title: "인기 영화",
    subtitle: "현재 인기 있는 영화 목록",
  });
  const [page, setPage] = useState(1);

  const PopularMovies = React.lazy(
    () => import("../../components/movieList/PopularMovies")
  );

  const NowPlayingMovies = React.lazy(
    () => import("../../components/movieList/NowPlayingMovies")
  );

  const UpcomingMovies = React.lazy(
    () => import("../../components/movieList/UpcomingMovies")
  );

  const TopRatedMovies = React.lazy(
    () => import("../../components/movieList/TopRatedMovies")
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
      <MainTitleContainer
        tapArray={categoryTapTextArray}
        handleTap={handleTap}
        tapTitle={tapName.title}
        tapSubTitle={tapName.subtitle}
      />
      <AnimatePresence>
        {tapName.title === "인기 영화" ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PopularMovies page={page} />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === "현재 상영중" ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <NowPlayingMovies page={page} />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === "개봉 예정" ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <UpcomingMovies page={page} />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === "평점높은 영화" ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <TopRatedMovies page={page} />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <MoreButtonContainer>
        <PageNumber setPage={setPage} page={page} pageNumbers={pageNumbers} />
      </MoreButtonContainer>
    </Layout>
  );
};
export default Movies;
