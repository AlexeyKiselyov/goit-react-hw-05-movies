import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  margin: 20px 20px;

  border-bottom: 2px solid;
`;
export const WrapperDetails = styled.div`
  padding: 10px;
  display: flex;
  gap: 30px;
`;

export const AboutFilm = styled.div`
  padding: 20px 10px;
`;

export const LinkBack = styled(Link)`
display: inline-block;
  padding: 4px 8px;
  margin-left: 10px;

  border:2px solid;
  border-radius: 6px;

  :hover,
  :focus {
    border-color: #2196f3;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const SecondaryTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
`;

export const Genres = styled.ul`
  display: flex;
  gap: 20px;

  justify-content: center;
`;

export const AdditionalTitle = styled.h3`
  margin-left: 20px;
  margin-bottom: 15px;
`;

export const AdditionalList = styled.ul`
  margin-left: 50px;
  margin-bottom: 15px;
  list-style-type: disc;
`;

export const AdditionalItem = styled.li`
  margin-bottom: 5px;
  font-size: 18px;

  :hover,
  :focus {
    color: #2196f3;
  }
`;
