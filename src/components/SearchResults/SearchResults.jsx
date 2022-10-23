import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Title,
  MovieSearchList,
  MovieSearchItem,
} from './SearchResults.styled';

export const SearchResults = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Title>Search results</Title>
      <MovieSearchList>
        {movies.map(movie => (
          <MovieSearchItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MovieSearchItem>
        ))}
      </MovieSearchList>
    </>
  );
};

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
