import { MdKeyboardArrowDown } from 'react-icons/md';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { useShowingNav } from '../../../context/toggleNavContext';
import NavbarBoard from '../../NavbarBoard';

const ResponsiveNav = () => {
  const { setToggleNav, toggleNav } = useShowingNav();
  const handleToggleNav = () => {
    setToggleNav((prev) => !prev);
  };

  return (
    <NavShowingIconBox>
      <MdKeyboardArrowDown size={40} onClick={handleToggleNav} />
      <AnimatePresence>{toggleNav ? <NavbarBoard /> : null}</AnimatePresence>
    </NavShowingIconBox>
  );
};
export default ResponsiveNav;

const NavShowingIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;
