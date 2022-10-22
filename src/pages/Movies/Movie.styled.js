import styled from 'styled-components';

export const Section = styled.section`
  margin: 20px 20px;
`;
export const Input = styled.input`
margin: 20px 0px 20px 20px;
padding: 6px 12px;
  width: 250px;

  border-radius:6px 0px 0px 6px;
  border: 2px solid;
  outline: none;
  
  font-size: 16px;

  &:hover,
  &:focus {
    border-color:#2196f3;
  }
`;



export const Title = styled.h2`
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const MovieSearchList = styled.ul`
  margin-left: 50px;
  margin-bottom: 15px;
  list-style-type: disc;
`;

export const MovieSearchItem = styled.li`
  margin-bottom: 5px;

  :hover,
  :focus {
    color: #2196f3;
  }
`;

export const Button = styled.button`
  padding: 6px 12px;
  

  border-radius:0px 6px 6px 0px;
  border: 2px solid;
  outline: none;
  
  font-size: 16px;

  &:hover,
  &:focus {
    background-color:#b1e0f2;
  }
`;

