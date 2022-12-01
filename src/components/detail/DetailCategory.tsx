import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { detailCategoryType, QUERY_KEY } from '../../model/types';
import { detail } from '../../utils/category';

const DetailCategory = () => {
  const [query, setQuery] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.TYPE);

  const checkQueryKey = queryKey || detailCategoryType.VIDEO;

  const handleCategory = (title: string) => {
    setQuery({
      type: title,
    });
  };
  return (
    <Container>
      {detail.Categories.map((category) => (
        <CategoryTap
          key={category.key}
          isActive={category.key === checkQueryKey}
          onClick={() => handleCategory(category.key)}
        >
          <CategoryTitle id={category.key}>{category.title}</CategoryTitle>
        </CategoryTap>
      ))}
    </Container>
  );
};
export default DetailCategory;

const Container = styled.ul`
  display: flex;
  align-items: center;
`;

const CategoryTap = styled.li<{ isActive?: boolean }>`
  padding: ${(props) => props.theme.mp.sm};
  margin: ${(props) => props.theme.mp.md} 0;
  margin-right: ${(props) => props.theme.mp.xxxxl};
  color: ${(props) =>
    props.isActive ? 'white' : props.theme.color.activeColor.md};
  background-color: ${(props) =>
    props.isActive ? props.theme.color.activeColor.lg : ''};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    background-color: ${(props) => props.theme.color.activeColor.lg};
    color: white;
  }
  &::last-child {
    margin-right: 0;
  }
`;

const CategoryTitle = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.xl};
`;
