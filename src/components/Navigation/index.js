import React from 'react';
import LanguageDropDown from '../LanguageDropDown';
import ToggleSwitch from '../ToggleSwitch'
import * as S from './styles';

function Navigation({isDarkTheme, setIsDarkTheme, language, setLanguage}) {
  return (
    <S.NavContainer>
      <S.SettingsContainer>
        <LanguageDropDown language={language} setLanguage={setLanguage}/>
        <ToggleSwitch isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>
      </S.SettingsContainer>
    </S.NavContainer>
  )
}

export default Navigation