import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { MOVIE_PAGE, QUERY_KEY } from '../model/types';

const MAX_PAGE = 5;

const Pagination = () => {
  const [query, setQuery] = useSearchParams();
  const key = query.get(QUERY_KEY.CURRENT);

  const checkPage = () => {
    const page = query.get(QUERY_KEY.PAGE);
    if (!page) {
      return 1;
    }
    return +page;
  };

  const handlePage = (number = 1) => {
    const page = number.toString();
    setQuery({
      current: key || 'popular',
      page: page,
    });
  };

  return (
    <MoreItemsButton>
      {pages.map((page) => (
        <MoreNumber onClick={() => handlePage(page)} key={page}>
          {page}
          {page === checkPage() && <MoreNumberMark />}
        </MoreNumber>
      ))}
    </MoreItemsButton>
  );
};
export default Pagination;

const pages: number[] = [];

let i = 1;
for (i; i <= MAX_PAGE; i++) {
  pages.push(i);
}

const MoreItemsButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreNumber = styled.span`
  position: relative;
  display: inline-block;
  border: 1px solid white;
  color: ${(props) => props.theme.color.textColor.xs};
  font-weight: 700;
  padding: ${(props) => props.theme.mp.md};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  margin-right: ${(props) => props.theme.mp.md};
  z-index: 10;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.color.red.xl};
  }
`;

const MoreNumberMark = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: ${(props) => props.theme.color.red.xl};
`;
