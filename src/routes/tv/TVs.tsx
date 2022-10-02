import React, { Suspense, useState } from "react";
import Layout from "../../components/Layout";
import MainTitleContainer, {
  CategoryTapType,
} from "../../components/MainTitleContainer";

import { AnimatePresence } from "framer-motion";
import {
  ComponentContainer,
  containerVar,
  MoreButtonContainer,
} from "../../components/sharedStyled";
import Loading from "../../components/Loading";
import PageNumber from "../../components/PageNumber";

const categoryTapTextArray: CategoryTapType[] = [
  {
    title: "인기 TV",
    subtitle: "현재 인기 있는 TV 목록",
  },
  {
    title: "현재 방영중",
    subtitle: "현재 방영중인 TV 목록",
  },

  {
    title: "평점높은 TV",
    subtitle: "평점 높은 영TV 목록",
  },
];

const pageNumbers = [1, 2, 3, 4, 5];

const TVs: React.FC = () => {
  const [tapName, setTapName] = useState<CategoryTapType>({
    title: "인기 TV",
    subtitle: "현재 인기 있는 TV 목록",
  });
  const [page, setPage] = useState(1);

  const PopularTVs = React.lazy(
    () => import("../../components/tvList/PopularTVs")
  );

  const NowPlayingTVs = React.lazy(
    () => import("../../components/tvList/NowPlayingTVs")
  );

  const TopRatedTVs = React.lazy(
    () => import("../../components/tvList/TopRatedTVs")
  );

  const handleTap = (title?: string, subtitle?: string) => {
    if (!title || !subtitle) return;
    setTapName({ title, subtitle });
  };

  return (
    <Layout isMainPaddingTop={true}>
      <MainTitleContainer
        tapArray={categoryTapTextArray}
        handleTap={handleTap}
        tapSubTitle={tapName.subtitle}
        tapTitle={tapName.title}
      />
      <AnimatePresence>
        {tapName.title === "인기 TV" ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PopularTVs page={page} />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === "현재 방영중" ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <NowPlayingTVs page={page} />
            </ComponentContainer>
          </Suspense>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {tapName.title === "평점높은 TV" ? (
          <Suspense fallback={<Loading />}>
            <ComponentContainer
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <TopRatedTVs page={page} />
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
export default TVs;
