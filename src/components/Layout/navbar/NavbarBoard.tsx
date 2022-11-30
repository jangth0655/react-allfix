import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import useNavbar from '../../../hooks/useNavbar';

const sliderVar: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      type: 'linear',
    },
  },
  exit: {
    scaleY: 0,
  },
};

const NavbarBoard = () => {
  const { navbar, onPage } = useNavbar();

  return (
    <Container
      variants={sliderVar}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Board>
        {navbar.map((item) => (
          <NavName onClick={() => onPage(item.name)} key={item.key}>
            {item.name}
          </NavName>
        ))}
      </Board>
      <Layer />
    </Container>
  );
};

export default NavbarBoard;

const Container = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  z-index: 100;
  transform-origin: top right;
`;
const Board = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: black;
  z-index: -1;
`;

const NavName = styled.li`
  display: inline-block;
  padding: 0.5rem;
  transition: ${(props) => props.theme.transition.md};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.highlight.sm};
  }
`;
