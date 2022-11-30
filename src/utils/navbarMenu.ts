import { navbarData } from '../data/data';
import { Navbar } from '../model/types';

class NavbarMenu {
  constructor(private navbarItems: Navbar[]) {}

  get NavbarItems() {
    return [...this.navbarItems];
  }
}

const navbar = new NavbarMenu(navbarData);

export default navbar;
