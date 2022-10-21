import { Outlet } from 'react-router-dom';
import { Header, LinkStyled,Navigation } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <LinkStyled to="/" end>
            Home
          </LinkStyled>
          <LinkStyled to="movies"> Movies</LinkStyled>
        </Navigation>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
