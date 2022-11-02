import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchResults } from 'components/SearchResults/SearchResults';
import { getMovieSearch } from 'servises/getMovieSearch';

import { Section } from './Movie.styled';
// ==================Movies==========================

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nothingFound, setNothingFound] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!params) return;
    setNothingFound(false);
    setError(null);
    setIsLoading(true);
    getMovieSearch(params)
      .then(response => {
        setMovies(response);
        if (response.length === 0) setNothingFound(true);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [params]);

  return (
    <>
      <Section>
        <SearchForm setSearchParams={setSearchParams} />
      </Section>

      {error && <p style={{ marginLeft: '50px' }}>Oops, some error:{error}</p>}

      {movies.length > 0 && (
        <Section>
          <SearchResults movies={movies} />
        </Section>
      )}
      {nothingFound && (
        <p style={{ marginLeft: '50px' }}>
          Oops...Nothing was found.Try to enter something else.
        </p>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
