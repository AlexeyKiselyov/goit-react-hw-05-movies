import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrandingApi } from 'servises/getTrandingApi';
import { Section,Title,FilmsList,FilmsItem } from './Home.styled';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTrandingApi()
      .then(response => {
        setTrending(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, some error:{error}</p>}
      <Section>
        <Title>Trending today</Title>
        <FilmsList>
          {trending &&
            trending.map(movie => (
              <FilmsItem key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </FilmsItem>
            ))}
        </FilmsList>
      </Section>
    </>
  );
};
