import { v4 } from 'uuid';

type Navbar = {
  key: string;
  name: string;
  pathname: string;
};

const navbarData: Navbar[] = [
  { key: v4(), name: '홈', pathname: '/' },
  { key: v4(), name: '영화', pathname: '/movies' },
  { key: v4(), name: 'TV', pathname: '/tvs' },
  { key: v4(), name: '검색', pathname: '/search' },
];

class NavbarMenu {
  constructor(private navbarItems: Navbar[]) {}

  get NavbarItems() {
    return [...this.navbarItems];
  }
}

const navbar = new NavbarMenu(navbarData);

export default navbar;
