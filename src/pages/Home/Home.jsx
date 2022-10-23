import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getTrandingApi } from 'servises/getTrandingApi';
import { Section, Title, FilmsList } from './Home.styled';
import { TrendingItem } from 'components/TrendingItem/TrendingItem';

 const Home = () => {
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
      {error && <p>Oops, some error:{error}</p>}

      <Section>
        <Title>Trending today</Title>
        <FilmsList>
          {trending && <TrendingItem trending={trending} />}
        </FilmsList>
      </Section>

      {isLoading && <Loader />}
    </>
  );
};

export default Home;