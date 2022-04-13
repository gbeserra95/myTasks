import styled from 'styled-components';
import { Checkbox } from "@styled-icons/boxicons-regular/Checkbox"
import { CheckboxSquare } from "@styled-icons/boxicons-regular/CheckboxSquare"

export const Checked = styled(CheckboxSquare)`
    cursor: pointer;
    color: ${props => props.theme.text.bold};
    height: 32px;
    border-radius: 8px;

    &:hover {
        color: ${props => props.theme.button.hover};
        transition: 0.2s;
    }
`;

export const Unchecked = styled(Checkbox)`
    cursor: pointer;
    color: ${props => props.theme.text.bold};
    height: 32px;
    border-radius: 8px;

    &:hover {
        color: ${props => props.theme.button.hover};
        transition: 0.2s;
    }
`;

export const Container = styled.div`
    display: flex;
    gap: 0.25rem;

    p {
        color: ${props => props.theme.input.color};
        text-decoration: ${props => props.checked ? "line-through" : "none"};
        text-decoration-color: ${props => props.theme.text.bold};
    }
`