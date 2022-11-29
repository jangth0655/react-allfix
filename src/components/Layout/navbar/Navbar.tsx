import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../assets/logo.png';
import useWindowSize from '../../../hooks/useWindowSize';
import useNavbar from '../../../hooks/useNavbar';
import ResponsiveNav from './ResponsiveNav';

const Navbar = () => {
  const { pathname } = useLocation();
  const { navbar, onPage } = useNavbar();
  const { standardWindowSize } = useWindowSize();

  return (
    <NavbarContainer>
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

      {standardWindowSize ? (
        <ResponsiveNav />
      ) : (
        <NavNameContainer>
          {navbar.map((item) => (
            <NavName onClick={() => onPage(item.name)} key={item.key}>
              {item.name}
              {pathname === item.pathname && <NavbarMark />}
            </NavName>
          ))}
        </NavNameContainer>
      )}
    </NavbarContainer>
  );
};
export default Navbar;

const NavbarContainer = styled.nav`
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
const NavNameContainer = styled.ul`
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;
const NavName = styled.li`
  padding: ${(props) => props.theme.mp.sm} ${(props) => props.theme.mp.md};
  font-weight: 600;
  cursor: pointer;
  position: relative;
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
