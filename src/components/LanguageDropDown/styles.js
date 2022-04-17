import styled from 'styled-components'
import brFlag from "../../assets/images/flag_brazil.webp"
import ukFlag from "../../assets/images/flag_uk.webp"
import esFlag from "../../assets/images/flag_spain.webp"

export const Flag = styled.div`
    border-radius: 0.275rem;
    height: 1.25rem;
    width: 1.75rem;
    background-image: ${props => props.img === "pt-br" ? `url(${brFlag})` : props.img === "en" ? `url(${ukFlag})` : `url(${esFlag})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    &:hover {
        cursor: pointer;
    }
`

export const List = styled.ul`
    position: absolute;
    top: 4rem;
    right: 1rem;
    width: 7.5rem;
    height: 6rem;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 1px ${props => `${props.theme.background}80`};
    overflow: hidden;

    li {
        display: flex;
        gap: 1rem;
        align-items: center;
        height: 2rem;
        font-weight: bold;
        font-size: 0.8rem;
        color: ${props => props.theme.button.color};
        background-color: ${props => props.theme.button.background};
        padding: 0 0.25rem;
    }

    li:hover {
        cursor: pointer;
        color: ${props => props.theme.button.hoverColor};
        background-color: ${props => props.theme.button.hover};
        transition: 0.2s;
    }
`