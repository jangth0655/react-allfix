import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { QUERY_KEY, searchCategoryType } from '../../model/types';

interface FormValue {
  keyword: string;
}

const SearchForm = () => {
  const [query, setQuery] = useSearchParams();
  const queryKey = query.get(QUERY_KEY.CURRENT) || searchCategoryType.MOVIE;
  const { handleSubmit, reset, register } = useForm<FormValue>();

  const onValid = ({ keyword }: FormValue) => {
    setQuery({
      current: queryKey,
      keyword,
    });
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Input
        {...register('keyword', { required: true })}
        placeholder='영화 또는 TV프로그램을 검색해보세요.'
      />
      <Button>검색</Button>
    </Form>
  );
};
export default SearchForm;

const Form = styled.form`
  width: 80%;
  margin: auto;
  margin-top: ${(props) => props.theme.mp.xxl};
`;
const Input = styled.input`
  width: 80%;
  height: 3.5rem;
  margin: auto;
  padding: 0 ${(props) => props.theme.mp.md};
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  color: ${(props) => props.theme.color.bg.lg};
  font-size: ${(props) => props.theme.textSize.lg};
  &::placeholder {
    font-size: ${(props) => props.theme.textSize.lg};
  }
`;
const Button = styled.button`
  border-radius: ${(props) => props.theme.borderRadius.xl};
  display: inline-block;
  margin-left: ${(props) => props.theme.mp.sm};
  width: 15%;
  height: 3.5rem;
  background-color: ${(props) => props.theme.color.highlight.md};
  color: white;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSize.lg};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  &:hover {
    background-color: ${(props) => props.theme.color.highlight.lg};
  }
`;
