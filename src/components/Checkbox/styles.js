import styled from 'styled-components';
import { Checkbox } from "@styled-icons/boxicons-regular/Checkbox"
import { CheckboxSquare } from "@styled-icons/boxicons-regular/CheckboxSquare"

export const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.text.bold};
    font-weight: bold;
    gap: 0.25rem;
    width: 90%;

    p {
        display: block;
        text-align: left;
        color: ${props => props.theme.input.color};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: ltr;
        text-decoration: ${props => props.checked ? "line-through" : "none"};
        text-decoration-color: ${props => props.theme.text.bold};
        line-height: 1.5rem;
    }

    form {
        width: 100%;
    }

    input {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.input.color};
        font-size: 1rem;
        font-weight: bold;
        border: 2px solid ${props => props.theme.input.border};
        border-radius: 0.5rem;
        height: 1.5rem;
        padding-left: 0.5rem;
        width: 100%;

        &:focus {
        outline: none;
        color: ${props => props.theme.input.color};
        border: 2px solid ${props => props.theme.text.bold};
        }
    }
`

export const Checked = styled(CheckboxSquare)`
    display: block;
    cursor: pointer;
    color: ${props => props.theme.text.bold};
    min-width: 2rem;
    max-width: 2rem;
    border-radius: 8px;

    &:hover {
        color: ${props => props.theme.button.hover};
        transition: 0.2s;
    }
`;

export const Unchecked = styled(Checkbox)`
    display: block;
    cursor: pointer;
    color: ${props => props.theme.text.bold};
    min-width: 2rem;
    max-width: 2rem;
    border-radius: 8px;

    &:hover {
        color: ${props => props.theme.button.hover};
        transition: 0.2s;
    }
`;