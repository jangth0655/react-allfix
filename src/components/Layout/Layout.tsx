import React, { useEffect, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';
import { useAnimation, useScroll, Variants, motion } from 'framer-motion';

import Navbar from './navbar/Navbar';
import { ToggleNavProvider } from '../../context/toggleNavContext';
import Main from './Main';

const ScrollVar: Variants = {
  top: {
    opacity: 0,
  },
  scroll: {
    opacity: 1,
  },
};
interface LayoutProps {
  children: React.ReactNode;
  isMainPaddingTop?: boolean;
  isMainMaxWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isMainPaddingTop }) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() < window.innerHeight / 2) {
        scrollAnimation.start('top');
      } else {
        scrollAnimation.start('scroll');
      }
    });
  }, [scrollAnimation, scrollY]);

  const scrollOnTop = () => {
    layoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <ToggleNavProvider>
      <Section ref={layoutRef}>
        <Navbar />
        <Main isPaddingTop={isMainPaddingTop}>
          {children}
          <ScrollUpButton
            variants={ScrollVar}
            initial='top'
            animate={scrollAnimation}
            onClick={scrollOnTop}
          >
            <FaArrowUp />
          </ScrollUpButton>
        </Main>
      </Section>
    </ToggleNavProvider>
  );
};

export default Layout;

const Section = styled.section``;

const ScrollUpButton = styled(motion.div)`
  z-index: 3;
  position: fixed;
  padding: ${(props) => props.theme.mp.sm};
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.color.highlight.xs};
  border-radius: 50%;
  transition: ${(props) => props.theme.transition.md};
  cursor: pointer;
  bottom: 50px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.color.highlight.md};
  }
`;
