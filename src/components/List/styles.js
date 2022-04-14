import styled from "styled-components"
import { Trash } from "@styled-icons/boxicons-solid/Trash"
import { Pencil } from "@styled-icons/boxicons-regular/Pencil"

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    div {
        display: flex;
        gap: 1rem;
    }
`

export const Item = styled.li`
    margin: 0;
    padding: 1rem 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${props => props.theme.input.placeHolder};
    transition: 0.2s;
`

export const TrashIcon = styled(Trash)`
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme.icon.color};

    &:hover {
        color: ${props => props.theme.icon.hover};
        transition: 0.2s;
    }
`

export const EditIcon = styled(Pencil)`
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme.icon.color};

    &:hover {
        color: ${props => props.theme.icon.hover};
        transition: 0.2s;
    }
`