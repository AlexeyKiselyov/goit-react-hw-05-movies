import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { getMovieDetailsById } from '../../servises/getMovieDetailsById';
import { AboutFilm } from 'components/AboutFilm/AboutFilm';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

import { Section, WrapperDetails, LinkBack } from './MovieDetails.styled';
// ======================MovieDetails===================

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
        setMovieDetails(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const { poster_path, title, overview, genres } = movieDetails;
  const backLinkHref= location.state?.from ?? "/";

  return (
    <>
      {/* ====================AboutFilm==================== */}
      <Section>
        {location.state ? (
          <LinkBack to={backLinkHref}>Go back</LinkBack>
        ) : (
          <LinkBack to="/">Go back</LinkBack>
        )}

        <WrapperDetails>
          {isLoading && <Loader />}
          {error && <p>Oops, some error:{error}</p>}

          {movieDetails && (
            <AboutFilm
              poster_path={poster_path}
              title={title}
              overview={overview}
              genres={genres}
            />
          )}
        </WrapperDetails>
      </Section>
      {/* ==============Additional information============= */}
      <Section>
        <AdditionalInfo />
      </Section>
      {/* ======================Outlet====================== */}
      <Outlet />
    </>
  );
};
