import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCategory } from '../hooks/useCategory';
import { useSearchParams } from 'react-router-dom';
import { MOVIE_PAGE, QUERY_KEY } from '../model/types';

export type CategoryTapType = {
  title?: string;
  subtitle?: string;
};

interface MainTitleContainerProps {}

const MainTitleContainer: React.FC<MainTitleContainerProps> = () => {
  const [query, setQuery] = useSearchParams();
  const { categories } = useCategory();

  const queryKey = query.get(QUERY_KEY.CURRENT);

  const titleValue = categories.find((category) => {
    if (!queryKey) {
      return {
        title: categories[0].title,
        subTitle: categories[0].subTitle,
        key: MOVIE_PAGE.POPULAR,
      };
    }
    return category.key === queryKey;
  });

  const handleCategory = (tap: string) => {
    setQuery({
      current: tap,
      page: 1 + '',
    });
  };

  return (
    <>
      <TitleContainer>
        <Title>{titleValue?.title}</Title>
        <SubTitle>{titleValue?.subTitle}</SubTitle>
      </TitleContainer>
      <CategoryContainer>
        {categories.map((tap) => (
          <CategoryTap onClick={() => handleCategory(tap.key)} key={tap.title}>
            {tap.title}
            {tap.key === titleValue?.key && <CategoryMark layoutId='tap' />}
          </CategoryTap>
        ))}
      </CategoryContainer>
    </>
  );
};
export default MainTitleContainer;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mp.xxxl};
`;
const Title = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.xxxxl};
  margin-bottom: ${(props) => props.theme.mp.lg};
`;
const SubTitle = styled.span`
  font-size: ${(props) => props.theme.textSize.lg};
  color: ${(props) => props.theme.color.textColor.sm};
`;

const CategoryContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
`;

const CategoryTap = styled.li`
  position: relative;
  margin-right: ${(props) => props.theme.mp.md};
  padding: ${(props) => props.theme.mp.sm};
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  transition: ${(props) => props.theme.transition.md};
  color: ${(props) => props.theme.color.textColor.xs};
  font-weight: 700;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.red.xl};
    color: ${(props) => props.theme.color.textColor.md};
  }
  &:focus-within {
    background-color: ${(props) => props.theme.color.red.xl};
    color: ${(props) => props.theme.color.textColor.md};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: ${(props) => props.theme.textSize.sm};
    margin-right: ${(props) => props.theme.mp.sm};
  }
`;

const CategoryMark = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  margin: auto;
  background-color: ${(props) => props.theme.color.activeColor.md};
  width: ${(props) => props.theme.mp.xs};
  height: ${(props) => props.theme.mp.xs};
  border-radius: 50%;
`;
