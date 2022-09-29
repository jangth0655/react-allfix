import styled from "styled-components";
import { Movie, TV } from "../../interface";
import MovieAndTV from "./MovieAndTV";

const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${(props) => props.theme.mp.xl};
  @media screen and (max-width: ${(props) => props.theme.responsive.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${(props) => props.theme.mp.lg};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${(props) => props.theme.mp.md};
  }
`;

interface MoviesAndTVsProps {
  movies?: Movie[];
  tvs?: TV[];
  isMovie?: boolean;
  isTV?: boolean;
}

const MoviesAndTVs: React.FC<MoviesAndTVsProps> = ({
  movies,
  isMovie,
  tvs,
  isTV,
}) => {
  return (
    <TotalContainer>
      {isMovie &&
        movies?.map((movie) => <MovieAndTV key={movie.id} movie={movie} />)}
    </TotalContainer>
  );
};

export default MoviesAndTVs;
