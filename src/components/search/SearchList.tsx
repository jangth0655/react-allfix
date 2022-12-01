import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { useSearch } from '../../hooks/useFetchData';
import { MovieWithTvList } from '../../model/interface/shared_interface';
import Layout from '../Layout/Layout';
import Loading from '../Loading';
import MovieAndTV from '../MovieAndTV';
import { TotalContainer } from '../sharedStyled';
import SearchCategory from './SearchCategory';
import SearchForm from './SearchForm';

const SearchList = () => {
  const { isLoading, search } = useSearch<MovieWithTvList>();

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
        <SearchForm />
      </Container>
      <SearchCategory />
      <SearchItemContainer>
        <TotalContainer>
          {isLoading ? (
            <Loading />
          ) : (
            search?.results.map((item) => (
              <MovieAndTV key={item.id} result={item} />
            ))
          )}
        </TotalContainer>
      </SearchItemContainer>
    </Layout>
  );
};
export default SearchList;

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
`;
const Title = styled.h1`
  margin-bottom: ${(props) => props.theme.mp.md};
  font-size: ${(props) => props.theme.textSize.xxxl};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.xxl};
  }
`;
const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.textSize.xxl};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.lg};
  }
`;

const SearchItemContainer = styled.div`
  margin-top: ${(props) => props.theme.mp.xxxl};
`;
