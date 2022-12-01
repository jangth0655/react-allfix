import styled from 'styled-components';
import { motion } from 'framer-motion';
import { search } from '../../utils/category';
import { useSearchParams } from 'react-router-dom';
import { QUERY_KEY, searchCategoryType } from '../../model/types';

const SearchCategory = () => {
  const [query, setQuery] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.CURRENT) || searchCategoryType.MOVIE;
  const handleTapName = (tap: string) => {
    setQuery({
      current: tap,
      keyword: '',
    });
  };
  return (
    <TapCategoryContainer>
      {search.Categories.map((tap) => (
        <TapName onClick={() => handleTapName(tap.key)} key={tap.key}>
          {tap.title} {queryKey === tap.key && <TapMark layoutId='searchTap' />}
        </TapName>
      ))}
    </TapCategoryContainer>
  );
};
export default SearchCategory;

const TapCategoryContainer = styled.div`
  margin-top: ${(props) => props.theme.mp.xxxxl};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TapName = styled.span`
  position: relative;
  margin-right: ${(props) => props.theme.mp.xxxl};
  padding: ${(props) => props.theme.mp.xs} ${(props) => props.theme.mp.md};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: ${(props) => props.theme.textSize.xl};
  font-weight: 700;
  transition: ${(props) => props.theme.transition.md};
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.bg.lg};
  }
`;

const TapMark = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: ${(props) => props.theme.mp.sm};
  background-color: ${(props) => props.theme.color.red.lg};
`;
