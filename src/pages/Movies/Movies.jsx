import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchResults } from 'components/SearchResults/SearchResults';
import { getMovieSearch } from 'servises/getMovieSearch';

import { Section } from './Movie.styled';
// ==================Movies==========================

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('query');

  useEffect(() => {
    if (!params) return;
    setError(null)
    setIsLoading(true);
    getMovieSearch(params)
      .then(response => setMovies(response))
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

      {error && <p>Oops, some error:{error}</p>}

      {movies.length > 0 && (
        <Section>
          <SearchResults movies={movies} />
        </Section>
      )}

      {isLoading && <Loader />}
    </>
  );
};
