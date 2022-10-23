import PropTypes from 'prop-types';

import {
  ReviewsTitle,
  Reviews,
  EmptyReviews,
  ReviewslItem,
  Author,
  Content,
} from './ReviewslList.styled';

export const ReviewslList = ({ reviews }) => {
  return (
    <>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Reviews>
        {reviews.length === 0 ? (
          <EmptyReviews>
            Oops! We don't have any reviews for this movie.
          </EmptyReviews>
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
      </Reviews>
    </>
  );
};

ReviewslList.propTypes={
  reviews:PropTypes.arrayOf(PropTypes.shape())
}
