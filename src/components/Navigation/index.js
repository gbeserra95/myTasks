import React from 'react';
import LanguageDropDown from '../LanguageDropDown';
import ToggleSwitch from '../ToggleSwitch'
import * as S from './styles';

function Navigation({isDarkTheme, setIsDarkTheme}) {
  return (
    <S.NavContainer>
      <S.SettingsContainer>
        <LanguageDropDown />
        <ToggleSwitch isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>
      </S.SettingsContainer>
    </S.NavContainer>
  )
}

export default Navigation