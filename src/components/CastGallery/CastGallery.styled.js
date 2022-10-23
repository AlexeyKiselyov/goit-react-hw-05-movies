import styled from 'styled-components';

export const CastList = styled.ul`
    grid-gap: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
    margin: 0 auto;
    max-width: calc(100vw - 48px);
    padding: 0;
`;

export const CastItem = styled.li`
  padding-bottom: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;

export const Paragraph = styled.p`
  padding: 5px 10px;

  font-size: 16px;
  text-align: center;
`;
