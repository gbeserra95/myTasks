import styled from 'styled-components';

export const Container = styled.p`
  text-align: center;
  margin: 1rem;
  font-size: 0.8rem;
  color: ${props => props.theme.text.color};
  line-height: 1.5rem;
  transition: color 0.2s;

  span {
     color: ${props => props.theme.text.bold};
     font-weight: bold;
     transition: color 0.2s;
  }
`;
