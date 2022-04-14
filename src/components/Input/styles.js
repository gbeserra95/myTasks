import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    background-color: ${props => props.theme.input.background};
    color: ${props => props.theme.input.color};
    font-size: 1rem;
    padding-left: 0.5rem;
    border: 2px solid ${props => props.theme.input.border};
    border-right: hidden;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    height: 2.5rem;
    width: 100%;
    transition: 0.2s;

    &::placeholder {
      color: ${props => props.theme.input.placeHolder};
    }

    &:focus {
      outline: none;
      color: ${props => props.theme.text.input};
      border: 2px solid ${props => props.theme.text.bold};
      border-right: hidden;
    }
  }

  button {
    width: 10rem;
    border: 2px solid ${props => props.theme.button.border};
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    font-size: 1rem;
    color: ${props => props.theme.button.color};
    background-color: ${props => props.theme.button.background};
    transition: 0.2s;

    &:disabled {
        color: grey;
        background-color: ${props => props.theme.button.disabled};
    }

    &:enabled:hover {
        cursor: pointer;
        background-color: ${props => props.theme.button.hover};
        color: ${props => props.theme.button.hoverColor};
    }
  }
`