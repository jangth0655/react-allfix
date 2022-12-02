import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { detailCategoryType, PAGE_TYPE, QUERY_KEY } from '../model/types';

interface Props {
  totalLength?: number;
  offset?: number;
  type?: 'list' | 'review';
}

const Pagination = ({ totalLength, type }: Props) => {
  const [query, setQuery] = useSearchParams();
  const key = query.get(QUERY_KEY.CURRENT);

  const MAX_PAGE = (totalLength && totalLength) || 5;

  const pages: number[] = [];
  let i = 1;
  for (i; i <= MAX_PAGE; i++) {
    pages.push(i);
  }

  const checkPage = () => {
    const page = query.get(QUERY_KEY.PAGE);
    if (!page) {
      return 1;
    }
    return +page;
  };

  const handlePage = (number = 1) => {
    const page = number.toString();
    if (type === 'list') {
      setQuery({
        current: key || PAGE_TYPE.POPULAR,
        page,
      });
      return;
    }
    setQuery({
      type: detailCategoryType.REVIEWS,
      page,
    });
    return;
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
