import React from 'react';
import * as S from "./styles"

function Checkbox({onClick, checked, item}) {

  return (
    <S.Container onClick={onClick} checked={checked}>
        {checked ? <S.Checked /> : <S.Unchecked />}
        <p>{item.item}</p>
    </S.Container>
  );
}

export default Checkbox;