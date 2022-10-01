import styled from "styled-components";

export const TotalContainer = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${(props) => props.theme.mp.xxl};
  @media screen and (max-width: ${(props) => props.theme.responsive.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${(props) => props.theme.mp.xl};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${(props) => props.theme.mp.lg};
  }
`;
