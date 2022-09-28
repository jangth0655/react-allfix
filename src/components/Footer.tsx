import styled from "styled-components";

const FooterBox = styled.div`
  padding: ${(props) => props.theme.mp.xxxl};
  color: ${(prosp) => prosp.theme.color.textColor.sm};
  position: relative;
  width: 100%;
  bottom: 0;
`;

const InquiryPhone = styled.div`
  & span:first-child {
    margin-right: ${(props) => props.theme.mp.sm};
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <InquiryPhone>
        <span>질문이 있으신가요? </span>
        <span>문의 전화 : 080-001-9587</span>
      </InquiryPhone>
    </FooterBox>
  );
};
export default Footer;
