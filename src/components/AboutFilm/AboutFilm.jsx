import { notFoundImg } from "links/imgNotFound";
import PropTypes from 'prop-types';
import { About,Title,SecondaryTitle,Paragraph, Genres} from "./AboutFilm.styled";

// ===================AboutFilm======================
export const AboutFilm = ({ poster_path, title, overview, genres }) => {
  return (
    <>
      <img
        src={poster_path===null?notFoundImg:`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width="300"
      />

      <About>
        <Title>{title}</Title>
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

AboutFilm.propTypes={
  poster_path:PropTypes.string,
  title:PropTypes.string,
  overview:PropTypes.string,
  genres:PropTypes.arrayOf(PropTypes.shape)
};