import { useNavigate } from 'react-router-dom';
import { currentPage } from '../model/types';
import navbar from '../utils/navbarMenu';

const useNavbar = () => {
  const navigate = useNavigate();

  const onPage = (pageName: string) => {
    switch (pageName) {
      case '홈':
        navigate(currentPage.HOME);
        break;
      case '영화':
        navigate(currentPage.MOVIE);
        break;
      case 'TV':
        navigate(currentPage.TV);
        break;
      case '검색':
        navigate(currentPage.SEARCH);
    }
  };

  return {
    navbar: navbar.NavbarItems,
    onPage,
  };
};
export default useNavbar;
