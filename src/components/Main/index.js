import React from 'react'
import * as S from './styles'

function Main({children}) {
  return (
      <S.Container>
          {children}
      </S.Container>
  );
}

export default Main;