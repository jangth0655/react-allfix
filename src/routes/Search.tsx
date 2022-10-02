import React, { Suspense, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  max-width: ${(props) => props.theme.responsive.xl};
  margin: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.mp.lg};
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.xxl};
`;
const Title = styled.h1`
  margin-bottom: ${(props) => props.theme.mp.md};
  font-size: ${(props) => props.theme.textSize.xxxl};
`;
const SubTitle = styled.h2``;

const Form = styled.form`
  width: 80%;
  margin: auto;
  margin-top: ${(props) => props.theme.mp.xxl};
`;
const Input = styled.input`
  width: 80%;
  height: 3.5rem;
  margin: auto;
  padding: 0 ${(props) => props.theme.mp.md};
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  color: ${(props) => props.theme.color.bg.lg};
  font-size: ${(props) => props.theme.textSize.lg};
  &::placeholder {
    font-size: ${(props) => props.theme.textSize.lg};
  }
`;
const Button = styled.button`
  border-radius: ${(props) => props.theme.borderRadius.xl};
  display: inline-block;
  margin-left: ${(props) => props.theme.mp.sm};
  width: 15%;
  height: 3.5rem;
  background-color: ${(props) => props.theme.color.highlight.md};
  color: white;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.lg};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    background-color: ${(props) => props.theme.color.highlight.lg};
  }
`;

const TapCategoryContainer = styled.div`
  margin-top: ${(props) => props.theme.mp.xxxxl};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TapName = styled.span`
  position: relative;
  margin-right: ${(props) => props.theme.mp.xxxl};
  padding: ${(props) => props.theme.mp.xs} ${(props) => props.theme.mp.md};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: ${(props) => props.theme.textSize.xl};
  font-weight: 700;
  transition: ${(props) => props.theme.transition.md};
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.bg.lg};
  }
`;

const TapMark = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: ${(props) => props.theme.mp.sm};
  background-color: ${(props) => props.theme.color.red.lg};
`;

const SearchItemContainer = styled.div`
  margin-top: ${(props) => props.theme.mp.xxxl};
`;

export const MoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SearchForm {
  keyword: string;
}

const tapNameArray = ["영화", "TV"];

const Search = () => {
  const [tapName, setTapName] = useState("영화");

  const [keyword, setKeyword] = useState("");
  const handleTapName = (tap: string) => {
    setTapName(tap);
  };
  const { handleSubmit, reset, register } = useForm<SearchForm>();

  const onValid = ({ keyword }: SearchForm) => {
    setKeyword(keyword);
    reset();
  };

  const MovieSearchComponent = React.lazy(
    () => import("../components/search/MovieSearch")
  );
  const TVSearchComponent = React.lazy(
    () => import("../components/search/TVSearch")
  );

  return (
    <Layout isMainPaddingTop={true} isMainMaxWidth={true}>
      <Helmet>
        <title>{`Search | AllFlix`}</title>
      </Helmet>
      <Container>
        <TitleContainer>
          <Title>수 많은 영화, TV 프로그램이 있습니다.</Title>
          <SubTitle>지금 바로 검색해보세요.</SubTitle>
        </TitleContainer>
        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("keyword", { required: true })}
            placeholder="영화 또는 TV프로그램을 검색해보세요."
          />
          <Button>검색</Button>
        </Form>
      </Container>
      <TapCategoryContainer>
        {tapNameArray.map((tap) => (
          <TapName onClick={() => handleTapName(tap)} key={tap}>
            {tap} {tap === tapName && <TapMark layoutId="searchTap" />}
          </TapName>
        ))}
      </TapCategoryContainer>
      <SearchItemContainer>
        {tapName === "영화" && keyword && (
          <Suspense fallback={<Loading />}>
            <MovieSearchComponent keyword={keyword} />
          </Suspense>
        )}
        {tapName === "TV" && keyword && (
          <Suspense fallback={<Loading />}>
            <TVSearchComponent keyword={keyword} />
          </Suspense>
        )}
      </SearchItemContainer>
    </Layout>
  );
};
export default Search;
