import styled from 'styled-components';
import { Checkbox } from "@styled-icons/boxicons-regular/Checkbox"
import { CheckboxSquare } from "@styled-icons/boxicons-regular/CheckboxSquare"

export const Checked = styled(CheckboxSquare)`
    color: ${props => props.theme.text.bold};
    height: 32px;
    border-radius: 8px;
`;

export const Unchecked = styled(Checkbox)`
    color: ${props => props.theme.text.bold};
    height: 32px;
    border-radius: 8px;
`;

export const Container = styled.div`
    cursor: pointer;
    display: flex;
    gap: 0.25rem;

    p {
        color: ${props => props.theme.input.color};
        text-decoration: ${props => props.checked ? "line-through" : "none"};
        text-decoration-color: ${props => props.theme.text.bold};
    }

    &:hover {
        ${Checked} {
            color: ${props => props.theme.button.hover};
            transition: 0.2s;
        }

        ${Unchecked} {
            color: ${props => props.theme.button.hover};
            transition: 0.2s;
        }

        p {
            color: ${props => props.theme.button.hover};
            text-decoration-color: ${props => props.theme.button.hover};
            transition: 0.2s;   
        }
    }
`