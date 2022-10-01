import React, { Suspense, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Loading from "../../components/Loading";
import PageNumber from "../../components/PageNumber";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mp.xxxl};
`;
const Title = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.xxxxl};
  margin-bottom: ${(props) => props.theme.mp.lg};
`;
const SubTitle = styled.span`
  font-size: ${(props) => props.theme.textSize.lg};
  color: ${(props) => props.theme.color.textColor.sm};
`;

const CategoryContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
`;

const CategoryTap = styled.li`
  position: relative;
  margin-right: ${(props) => props.theme.mp.md};
  padding: ${(props) => props.theme.mp.sm};
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  transition: ${(props) => props.theme.transition.md};
  color: ${(props) => props.theme.color.textColor.xs};
  font-weight: 700;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.red.xl};
    color: ${(props) => props.theme.color.textColor.md};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.sm};
    margin-right: ${(props) => props.theme.mp.sm};
  }
`;

const CategoryMark = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  margin: auto;
  background-color: ${(props) => props.theme.color.activeColor.md};
  width: ${(props) => props.theme.mp.xs};
  height: ${(props) => props.theme.mp.xs};
  border-radius: 50%;
`;

const MoviesContainer = styled(motion.div)`
  margin-bottom: 7rem;
`;

const MoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const moviesContainerVar: Variants = {
  initial: {
    opacity: 0,
    translateY: "50px",
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
  },
};

type CategoryTapType =
  | "인기 영화"
  | "현재 상영중"
  | "상영 예정"
  | "평점높은 영화";

const categoryTapTextArray: CategoryTapType[] = [
  "인기 영화",
  "현재 상영중",
  "상영 예정",
  "평점높은 영화",
];

const pageNumbers = [1, 2, 3, 4, 5];

const Movies = () => {
  const [tapName, setTapName] = useState<CategoryTapType>("인기 영화");
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

  return (
    <Layout isMainPaddingTop={true}>
      <TitleContainer>
        <Title>인기 영화</Title>
        <SubTitle>현재 인기 있는 영화 목록</SubTitle>
      </TitleContainer>
      <CategoryContainer>
        {categoryTapTextArray.map((tap) => (
          <CategoryTap onClick={() => setTapName(tap)} key={tap}>
            {tap}
            {tapName === tap && <CategoryMark layoutId="tap" />}
          </CategoryTap>
        ))}
      </CategoryContainer>
      <AnimatePresence>
        {tapName === "인기 영화" ? (
          <Suspense fallback={<Loading />}>
            <MoviesContainer
              variants={moviesContainerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PopularMovies page={page} />
            </MoviesContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName === "현재 상영중" ? (
          <Suspense fallback={<Loading />}>
            <MoviesContainer
              variants={moviesContainerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <NowPlayingMovies page={page} />
            </MoviesContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName === "상영 예정" ? (
          <Suspense fallback={<Loading />}>
            <MoviesContainer
              variants={moviesContainerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <UpcomingMovies page={page} />
            </MoviesContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName === "평점높은 영화" ? (
          <Suspense fallback={<Loading />}>
            <MoviesContainer
              variants={moviesContainerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <TopRatedMovies page={page} />
            </MoviesContainer>
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
