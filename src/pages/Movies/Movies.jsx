import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovieSearch } from 'servises/getMovieSearch';
import {
  Section,
  Title,
  MovieSearchList,
  MovieSearchItem,
  Input,
  Button,
} from './Movie.styled';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    if (!params) return;
    setIsLoading(true);
    getMovieSearch(params)
      .then(response => setMovies(response))
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [params]);

  const onInputChange = e => {
    const { value } = e.target;
    setMovieInput(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: movieInput });
    setMovieInput('');
  };

  return (
    <>
      <Section>
        <form onSubmit={onFormSubmit}>
          <Input
            onChange={onInputChange}
            type="text"
            name="searchInput"
            value={movieInput}
            placeholder="Enter movie name"
          />
          <Button>Search</Button>
        </form>
      </Section>

      {error && <p>Oops, some error:{error}</p>}

      {movies.length > 0 && (
        <Section>
          <Title>Trending today</Title>
          <MovieSearchList>
            {movies.map(movie => (
              <MovieSearchItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </MovieSearchItem>
            ))}
          </MovieSearchList>
        </Section>
      )}

      {isLoading && <Loader />}
    </>
  );
};
