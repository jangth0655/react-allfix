import styled from 'styled-components';
import { useShowingNav } from '../../context/toggleNavContext';

interface Props {
  isPaddingTop?: boolean;
  children: React.ReactNode;
}

const Main = ({ isPaddingTop, children }: Props) => {
  const { setToggleNav } = useShowingNav();
  return (
    <Container onClick={() => setToggleNav(false)} padding={isPaddingTop}>
      {children}
    </Container>
  );
};
export default Main;

const Container = styled.main<{ padding?: boolean }>`
  padding: ${(props) => (props.padding ? '10rem 1.2rem 3rem 1.2rem' : '0')};
  margin: auto;
`;
