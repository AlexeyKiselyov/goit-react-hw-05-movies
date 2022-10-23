import { Link, useLocation } from 'react-router-dom';
import {
  AdditionalTitle,
  AdditionalList,
  AdditionalItem,
} from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <>
      <AdditionalTitle>Additional information</AdditionalTitle>
      <AdditionalList>
        <AdditionalItem>
          <Link to="cast" state={{ from: location.state?.from } ?? '/'}>
            Cast
          </Link>
        </AdditionalItem>
        <AdditionalItem>
          <Link to="reviews" state={{ from: location.state?.from } ?? '/'}>
            Reviews
          </Link>
        </AdditionalItem>
      </AdditionalList>
    </>
  );
};
