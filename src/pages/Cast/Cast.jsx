import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastGallery } from 'components/CastGallery/CastGallery';
import { Loader } from 'components/Loader/Loader';
import { getMovieCredits } from 'servises/getMovieCredits';

import { Section } from './Cast.styled';

// =========================Cast======================
const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieCredits(movieId)
      .then(response => {
        setCredits(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, some error:{error}</p>}
      <Section>
        <CastGallery credits={credits} />
      </Section>
    </>
  );
};

export default Cast;
