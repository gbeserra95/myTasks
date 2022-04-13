import React from 'react';
import * as S from "./styles"

function Checkbox({onClick, checked, item}) {

  return (
    <S.Container checked={checked}>
        {
          checked ? 
          <S.Checked onClick={onClick} checked={checked}/> : 
          <S.Unchecked onClick={onClick} checked={checked}/>
        }
        <p>{item.item}</p>
    </S.Container>
  );
}

export default Checkbox;