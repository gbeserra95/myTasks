import styled from 'styled-components'
import LOGO from '../../assets/logo/myTasks.webp'

export const Container = styled.header`
  display: flex;
  justify-content: center;

  div {
    height: 6rem;
    width: 100%;
    background-image: url(${LOGO});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`