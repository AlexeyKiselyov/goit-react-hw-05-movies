import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { getMovieReviews } from 'servises/getMovieReviews';
import { ReviewslList } from 'components/ReviewslList/ReviewslList';

import { Section } from './Reviews.styled';

// ======================Reviews========================
 const Reviews = () => {
  const [reviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(response => {
        setMovieReviews(response);
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
        <ReviewslList reviews={reviews} />
      </Section>
    </>
  );
};

export default Reviews;
