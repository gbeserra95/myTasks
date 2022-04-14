import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${props => props.theme.text.color};
`;
