import styled from 'styled-components';

export const Section = styled.section`
  margin: 20px 20px;

  border-bottom: 2px solid;
`;
export const CastList = styled.ul`
  /* padding: 10px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
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
