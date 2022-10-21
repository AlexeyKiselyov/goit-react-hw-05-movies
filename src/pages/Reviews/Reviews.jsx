import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/getMovieReviews';
import {
  Section,
  ReviewsTitle,
  ReviewslList,
  ReviewslItem,
  Author,
  Content,
  EmptyReviews
} from './Reviews.styled';

export const Reviews = () => {
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

  // const {author,content,author_details:author_details} = review;

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, some error:{error}</p>}
      <Section>
        <ReviewsTitle>Reviews</ReviewsTitle>
        <ReviewslList>
          {reviews.length === 0 ? (
            <EmptyReviews>Oops! We don't have any reviews for this movie.</EmptyReviews>
          ) : (
            reviews.map(({ id, author, content }) => {
              return (
                <ReviewslItem key={id}>
                  <Author>Author: {author}</Author>
                  <Content>{content}</Content>
                </ReviewslItem>
              );
            })
          )}
        </ReviewslList>
      </Section>
    </>
  );
};
