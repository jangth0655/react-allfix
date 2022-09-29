import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterBox = styled.div`
  padding: ${(props) => props.theme.mp.xxxl};
  color: ${(prosp) => prosp.theme.color.textColor.sm};
  position: relative;
  width: 100%;
  bottom: 0;
`;

const InquiryPhone = styled.div`
  font-size: ${(props) => props.theme.textSize.lg};
  margin-bottom: ${(props) => props.theme.mp.xxxxl};
  & span:first-child {
    margin-right: ${(props) => props.theme.mp.sm};
  }
`;

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
`;

const MenuBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterBox>
      <InquiryPhone>
        <span>질문이 있으신가요? </span>
        <span>문의 전화 : 080-001-9587</span>
      </InquiryPhone>
      <MenuContainer>
        <MenuBox>
          <Link to={"https://help.netflix.com/ko/node/412"}>넷플릭스 소개</Link>
        </MenuBox>
        <MenuBox>
          <Link to={"https://help.netflix.com/ko/"}>고객 센터</Link>
        </MenuBox>
        <MenuBox>
          <Link to={"https://media.netflix.com/ko/"}>미디어 센터</Link>
        </MenuBox>
        <MenuBox>
          <Link to={"https://help.netflix.com/legal/termsofuse"}>이용약관</Link>
        </MenuBox>
        <MenuBox>
          <Link to={"https://help.netflix.com/legal/privacy"}>개인정보</Link>
        </MenuBox>
        <MenuBox>
          <Link to={"https://help.netflix.com/legal/corpinfo"}>회사정보</Link>
        </MenuBox>
        <MenuBox>
          <Link to={"https://help.netflix.com/ko/contactus"}>문의하기</Link>
        </MenuBox>
        <MenuBox>
          <Link to={"https://help.netflix.com/legal/notices"}>법적 고지</Link>
        </MenuBox>
      </MenuContainer>
    </FooterBox>
  );
};
export default Footer;
