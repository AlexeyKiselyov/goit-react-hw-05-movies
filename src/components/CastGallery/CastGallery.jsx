import { notFoundImg } from 'links/imgNotFound';
import { CastList, CastItem, Paragraph } from './CastGallery.styled';

export const CastGallery = ({ credits }) => {
  return (
    <>
      <CastList>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    profile_path === null
                      ? notFoundImg
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                />
                <Paragraph>{name}</Paragraph>
                <Paragraph>Character: {character}</Paragraph>
              </CastItem>
            );
          })}
      </CastList>
    </>
  );
};
