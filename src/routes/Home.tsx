import styled from "styled-components";
import SectionTem from "../components/home/SectionTem";
import Layout from "../components/Layout";

const Main = styled.section`
  &:first-child {
    border-top: ${(props) => props.theme.mp.xs} solid
      ${(props) => props.theme.color.textColor.sm};
  }
`;
const BorderBox = styled.div`
  border-bottom: ${(props) => props.theme.mp.xs} solid
    ${(props) => props.theme.color.textColor.sm};
`;

const Home = () => {
  return (
    <Layout showHeader={true} isMainMaxWidth={false}>
      <Main>
        <BorderBox>
          <SectionTem
            url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            title="TV 즐기세요"
            subTitle="스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요."
            videoUrl={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v`}
          />
        </BorderBox>
        <BorderBox>
          <SectionTem
            url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            title="즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요."
            subTitle="간편하게 저장하고 빈틈없이 즐겨보세요."
          />
        </BorderBox>
        <BorderBox>
          <SectionTem
            secondVideo={true}
            url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            title="다양한 디바이스에서 시청하세요."
            subTitle="각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다."
            videoUrl={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v`}
          />
        </BorderBox>
      </Main>
    </Layout>
  );
};
export default Home;
