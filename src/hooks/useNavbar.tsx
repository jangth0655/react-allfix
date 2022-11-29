import { useNavigate } from 'react-router-dom';
import navbar from '../utils/navbarMenu';

const useNavbar = () => {
  const navigate = useNavigate();

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

  return {
    navbar: navbar.NavbarItems,
    onPage,
  };
};
export default useNavbar;
