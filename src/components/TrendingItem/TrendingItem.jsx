import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmsItem } from './TrendingItem.styled';

export const TrendingItem = ({ trending }) => {
  return (
    <>
      {trending.map(movie => (
        <FilmsItem key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </FilmsItem>
      ))}
    </>
  );
};

TrendingItem.propTypes = {
  trending: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
