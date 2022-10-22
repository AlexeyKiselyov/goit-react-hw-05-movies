import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  padding: 8px 4px;

  color: black;
  font-weight: 600;
  font-size: 24px;
  border-radius: 6px;

  &.active {
    color: red;
  }

  :hover:not(:active),
  :focus-visible:not(:active) {
    color: #2196f3;
  }

  :not(:last-child){
    margin-right: 20px;
  }
`;

export const Header = styled.header`
  padding: 15px 30px;
  border-bottom: 2px solid;
`;

export const Navigation = styled.nav`
  padding: 4px 4px;
`;
