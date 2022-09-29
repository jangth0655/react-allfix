import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovie } from "../../apis/movie/movie-api";

import { getPopularMovie } from "../../interface";
import Loading from "../../components/Loading";

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

const MoreItemsButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreButtonText = styled.span`
  display: inline-block;

  border-radius: ${(props) => props.theme.borderRadius.md};
  color: ${(props) => props.theme.color.textColor.xs};
  background-color: ${(props) => props.theme.color.red.md};
  font-weight: 700;
  padding: ${(props) => props.theme.mp.sm} ${(props) => props.theme.mp.lg};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.color.red.lg};
  }
`;

const moviesContainerVar: Variants = {
  initial: {
    opacity: 0,
    translateY: "100px",
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

const Movies = () => {
  const PopularMovie = React.lazy(
    () => import("../../components/ItemList/MoviesAndTVs")
  );

  const [tapName, setTapName] = useState<CategoryTapType>("인기 영화");
  const [page, setPage] = useState(1);
  const { data: moviePopularData, refetch } = useQuery<getPopularMovie>(
    ["popularMovies"],
    () => fetchPopularMovie(page),
    {
      staleTime: 50000,
      suspense: true,
    }
  );

  useEffect(() => {
    if (!!page) {
      refetch();
    }
  }, [page]);

  const handlePage = () => {
    setPage((prev) => prev + 1);
  };

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
              <PopularMovie isMovie movies={moviePopularData?.results} />
            </MoviesContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>
      <MoreItemsButton>
        <MoreButtonText onClick={handlePage}>더 보기</MoreButtonText>
      </MoreItemsButton>
    </Layout>
  );
};
export default Movies;
