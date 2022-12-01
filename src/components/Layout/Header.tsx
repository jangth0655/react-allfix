import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const onMoviePage = () => {
    navigate('/movie');
  };

  return (
    <HeaderContainer>
      <HeaderLayer />
      <HeaderTitleBox>
        <HeaderTitle>영화와 시리즈를 무제한으로</HeaderTitle>
        <HeaderSubtitle>
          다양한 디바이스에서 시청하세요 언제든지 해지하실 수 있습니다.
        </HeaderSubtitle>
        <HeaderStartButton onClick={onMoviePage}>시작하기</HeaderStartButton>
      </HeaderTitleBox>
      <HeaderImageBox>
        <HeaderImage
          src={
            'https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/8ad9e9f9-b386-4068-a360-d270e14f7d34/KR-ko-20220926-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          }
        />
      </HeaderImageBox>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.header`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
`;

const HeaderImageBox = styled.div`
  width: 100%;
  height: 70vh;
`;
const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeaderLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), black);
`;

const HeaderTitleBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const HeaderTitle = styled.span`
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.mp.md};
  font-size: ${(props) => props.theme.textSize.xxxxl};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.xxxl};
  }
`;

const HeaderSubtitle = styled.span`
  font-weight: 500;
  font-size: ${(props) => props.theme.textSize.lg};
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.md};
  }
`;

const HeaderStartButton = styled.button`
  padding: ${(props) => props.theme.mp.md} ${(props) => props.theme.mp.xl};
  background-color: ${(props) => props.theme.color.red.lg};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  margin-top: ${(props) => props.theme.mp.lg};
  color: white;
  font-weight: 600;
  font-size: ${(props) => props.theme.textSize.lg};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    background-color: ${(props) => props.theme.color.red.xl};
  }
`;
