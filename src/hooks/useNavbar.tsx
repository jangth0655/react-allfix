import { useNavigate } from 'react-router-dom';
import navbar from '../utils/navbarMenu';

const useNavbar = () => {
  const navigate = useNavigate();

  const onPage = (pageName: string) => {
    const name = navbar.getPageName(pageName);
    navigate(name);
  };

  return {
    navbar: navbar.getNavbarItems,
    onPage,
  };
};
export default useNavbar;
