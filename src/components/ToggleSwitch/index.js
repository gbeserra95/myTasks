import React from 'react'
import Switch from 'react-switch'
import { MdWbSunny, MdNightlight } from 'react-icons/md'
import * as S from './styles'

function ToggleSwitch({isDarkTheme, setIsDarkTheme}) {
  function handleSettingThemeOnLocalStorage() {
    localStorage.setItem("isDarkTheme", !isDarkTheme)
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <li>
      <label aria-label='Switch to either light or dark mode'>
        <Switch 
          onChange={() => handleSettingThemeOnLocalStorage()}
          checked={isDarkTheme}
          offColor={"#383B56"}
          offHandleColor="#3CDBC0"
          onHandleColor="#F6EFEE"
          onColor="#3CDBC0"
          checkedIcon={
            <S.IconContainer color="#383B56">
              <MdNightlight/>
            </S.IconContainer>
          }
          uncheckedIcon={
            <S.IconContainer color="#3CDBC0">
              <MdWbSunny/>
            </S.IconContainer>
          }
          activeBoxShadow="'0 0 2px 3px #3CDBC0'"
          />
      </label>
    </li>
  )
}

export default ToggleSwitch;