import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/getMovieCredits';
import { Section, CastList,CastItem,Paragraph } from './Cast.styled';

const notFoundImg="https://dropmefiles.top/ua/i/2b43d625fc0a0eb276c83f6530bc7f63/e2e011cb8ece845c63e9313e0b292f85"


export const Cast = () => {
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
        <CastList>
          {credits &&
            credits.map(({ id, profile_path, name, character }) => {
              return(
              <CastItem key={id}>
                <img
                  src={ profile_path===null?notFoundImg:`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}                  
                />
                <Paragraph>{name}</Paragraph>
                <Paragraph>Character: {character}</Paragraph>
              </CastItem>
            )})}
        </CastList>
      </Section>
    </>
  );
};
