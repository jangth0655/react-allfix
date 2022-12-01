import styled from 'styled-components';
import { useDetail, useKeywords } from '../../hooks/useFetchData';

import {
  GetMovieKeyword,
  IMovieDetail,
} from '../../model/interface/movie_interface';
import { GetTVKeyword, ITVDetail } from '../../model/interface/tv_interface';
import ImageUrl from '../../utils/imageUrl';

import Layout from '../Layout/Layout';
import Loading from '../Loading';
import DetailCategory from './DetailCategory';
import DetailSection from './detailSection/DetailSection';
import InfoSection from './detailSection/InfoSection';

const Detail = () => {
  const { detail, isLoading } = useDetail<IMovieDetail & ITVDetail>();
  const { keywords } = useKeywords<GetMovieKeyword & GetTVKeyword>();

  return (
    <Layout isMainPaddingTop={false} isMainMaxWidth={false}>
      {isLoading ? (
        <Loading />
      ) : (
        detail?.backdrop_path && (
          <Background backgroundImage={ImageUrl(detail.backdrop_path)} />
        )
      )}
      <BackgroundLayer />
      <Container>
        <InfoContainer>
          <InfoSection detail={detail} keywords={keywords} />
        </InfoContainer>
        <DetailCategory />
        <DetailSection />
      </Container>
    </Layout>
  );
};
export default Detail;

const ContainerSection = styled.section`
  padding-bottom: 5rem;
  padding-top: ${(props) => props.theme.mp.xxl};
  border-bottom: 1.5px solid ${(props) => props.theme.color.textColor.sm};
  font-weight: 600;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const InfoContainer = styled(ContainerSection)`
  display: flex;

  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Background = styled.div<{ backgroundImage?: string }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  z-index: -2;
`;

const BackgroundLayer = styled.div`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
`;

const Container = styled.div`
  padding: 0 ${(props) => props.theme.mp.md};
  padding-top: 10rem;
  z-index: 100;
  max-width: ${(props) => props.theme.responsive.xl};
  margin: auto;
`;
