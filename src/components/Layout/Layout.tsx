// import 정리하기
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AnimatePresence,
  useAnimation,
  useScroll,
  Variants,
  motion,
} from 'framer-motion';

import { MdKeyboardArrowDown } from 'react-icons/md';
import useWindowSize from '../../libs/WindowSize';
import NavbarBoard from '../NavbarBoard';
import { FaArrowUp } from 'react-icons/fa';

// styled-components 정리하기 - 파일 분리
const Section = styled.section``;
const Navbar = styled.nav`
  z-index: 100;
  padding: ${(props) => props.theme.mp.md} ${(props) => props.theme.mp.xxxxl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  z-index: 100;
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    padding: ${(props) => props.theme.mp.md} ${(props) => props.theme.mp.md};
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const LogoImageBox = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin-right: ${(props) => props.theme.mp.sm};
`;
const LogoImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const LogoTitle = styled.div`
  z-index: 10;
  font-size: ${(props) => props.theme.textSize.xl};
  font-weight: 700;
  & span:nth-child(2) {
    color: ${(props) => props.theme.color.red.lg};
  }
`;
const NavUl = styled.ul`
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;
const NavLi = styled.li`
  padding: ${(props) => props.theme.mp.sm} ${(props) => props.theme.mp.md};
  font-weight: 600;
  cursor: pointer;
  position: relative;
`;

const NavShowingIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;

const NavbarMark = styled.div`
  position: absolute;
  width: 50%;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 2px;
  height: 2px;
  background-color: ${(props) => props.theme.color.red.md};
`;

const Main = styled.main<{ padding?: boolean }>`
  padding: ${(props) => (props.padding ? '10rem 1.2rem 3rem 1.2rem' : '0')};
  margin: auto;
`;

const ScrollUpButton = styled(motion.div)`
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

const TopDiv = styled.div``;

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

// class로 분리하기, 변수이름 = navbarText
export const navbarLiArray = [
  { key: 'home', name: '홈', pathname: '/' },
  { key: 'movie', name: '영화', pathname: '/movies' },
  { key: 'tv', name: 'TV', pathname: '/tvs' },
  { key: 'search', name: '검색', pathname: '/search' },
];

const Layout: React.FC<LayoutProps> = ({ children, isMainPaddingTop }) => {
  const [showingNav, setShowingNav] = useState(false);
  const { windowSize } = useWindowSize();
  const { pathname } = useLocation();
  const layoutRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();

  // useEffect 마지막으로 모으기 (관련있는 데이터)
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() < window.innerHeight / 2) {
        scrollAnimation.start('top');
      } else {
        scrollAnimation.start('scroll');
      }
    });
  }, [scrollAnimation, scrollY]);

  // NavbarBoard에서 중복사용되므로 함수 생성
  const onPage = (pageName: string) => {
    switch (pageName) {
      case '홈':
        navigate('/');
        break;
      case '영화':
        navigate('/movies');
        break;
      case 'TV':
        navigate('/tvs');
        break;
      case '검색':
        navigate('/search');
    }
  };

  const onShowingNav = () => {
    setShowingNav((prev) => !prev);
  };

  useEffect(() => {
    if (windowSize > 640) {
      setShowingNav(false);
    }
  }, [windowSize]);

  const scrollOnTop = () => {
    layoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Section>
      <TopDiv ref={layoutRef} />
      {/* Navbar 컴포넌트 분리하기 */}
      <Navbar>
        <Link to={'/'}>
          <LogoBox>
            <LogoImageBox>
              <LogoImage src={logo} alt='' />
            </LogoImageBox>
            <LogoTitle>
              <span>All</span>
              <span>Flix</span>
            </LogoTitle>
          </LogoBox>
        </Link>

        {windowSize > 640 ? (
          <>
            <NavUl>
              {navbarLiArray.map((item) => (
                <NavLi onClick={() => onPage(item.name)} key={item.key}>
                  {item.name}
                  {pathname === item.pathname && <NavbarMark />}
                </NavLi>
              ))}
            </NavUl>
          </>
        ) : null}

        {windowSize < 640 ? (
          <>
            <NavShowingIconBox onClick={onShowingNav}>
              <MdKeyboardArrowDown size={40} />
            </NavShowingIconBox>
          </>
        ) : null}

        <AnimatePresence>{showingNav ? <NavbarBoard /> : null}</AnimatePresence>
      </Navbar>

      <Main padding={isMainPaddingTop} onClick={() => setShowingNav(false)}>
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
  );
};

export default Layout;
