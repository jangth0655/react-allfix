import { navbarData } from '../data/data';
import { currentPage, Navbar } from '../model/types';

class NavbarMenu {
  constructor(private navbarItems: Navbar[]) {}

  get getNavbarItems() {
    return [...this.navbarItems];
  }

  getPageName = (pageName: string) => {
    switch (pageName) {
      case '홈':
        return currentPage.HOME;
      case '영화':
        return currentPage.MOVIE;
      case 'TV':
        return currentPage.TV;
      case '검색':
        return currentPage.SEARCH;
      default:
        return currentPage.HOME;
    }
  };
}

const navbar = new NavbarMenu(navbarData);

export default navbar;
