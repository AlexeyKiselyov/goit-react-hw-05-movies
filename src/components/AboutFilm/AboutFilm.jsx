import imageNotFaund from '../../images/imgNotFound.jpg';
import PropTypes from 'prop-types';
import {
  About,
  Title,
  UserScore,
  SecondaryTitle,
  Paragraph,
  Genres,
} from './AboutFilm.styled';

// ===================AboutFilm======================
export const AboutFilm = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <>
      <img
        src={
          poster_path === null
            ? imageNotFaund
            : `https://image.tmdb.org/t/p/w500/${poster_path}`
        }
        alt={title}
        width="300"
      />

      <About>
        <Title>{title}</Title>
        <UserScore>
          User Score: {Math.round(vote_average * 10)}%
        </UserScore>
        <SecondaryTitle>Overview</SecondaryTitle>
        <Paragraph>{overview}</Paragraph>
        <SecondaryTitle>Genres</SecondaryTitle>
        <Genres>
          {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </Genres>
      </About>
    </>
  );
};

AboutFilm.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.shape),
};
