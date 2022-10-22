import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetailsById } from '../../servises/getMovieDetailsById';
import {
  Section,
  WrapperDetails,
  AboutFilm,
  LinkBack,
  Title,
  SecondaryTitle,
  Paragraph,
  Genres,
  AdditionalTitle,
  AdditionalList,
  AdditionalItem,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetailsById(movieId)
      .then(response => {
        // console.log(response);
        setMovieDetails(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  // const hendleLoaded = () => {
  //   setIsLoading(true);
  // };

  const { poster_path, title, overview, genres } = movieDetails;

  return (
    <>
      <Section>
        {location.state ? (
          <LinkBack to={location.state.from}>Go back</LinkBack>
        ) : (
          <LinkBack to="/">Go back</LinkBack>
        )}

        <WrapperDetails>
          {isLoading && <Loader />}
          {error && <p>Oops, some error:{error}</p>}
          {movieDetails && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              width="300"
              // style={{ display: isLoading ? 'block' : 'none' }}
              // onLoad={hendleLoaded}
            />
          )}
          <AboutFilm>
            <Title>{title}</Title>
            <SecondaryTitle>Overview</SecondaryTitle>
            <Paragraph>{overview}</Paragraph>
            <SecondaryTitle>Genres</SecondaryTitle>
            <Genres>
              {genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </Genres>
          </AboutFilm>
        </WrapperDetails>
      </Section>
      {/* ==============Additional information============= */}
      <Section>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalList>
          <AdditionalItem>
            <Link to="cast">Cast</Link>
          </AdditionalItem>
          <AdditionalItem>
            <Link to="reviews">Reviews</Link>
          </AdditionalItem>
        </AdditionalList>
      </Section>
      <Outlet />
    </>
  );
};
