import React, { useRef, useState, useEffect } from 'react';
import * as S from './styles';
import { LANGUAGES } from "../../helpers/languages" 

function LanguageDropDown({language, setLanguage}) {
  const ref = useRef()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleSelectedLanguage(value) {
    localStorage.setItem("language", value.value)
    setIsMenuOpen(false)
    setLanguage(value.value)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && ref.current && !ref.current.contains(event.target))
        setIsMenuOpen(false)
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ isMenuOpen ])

  return (
    <li ref={ref}>
      <S.Flag 
        onClick={() => {isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}}
        img={language}
      />
      {isMenuOpen && (
          <S.List>
            {
              React.Children.toArray(
                LANGUAGES.map(language => {
                  return (
                    <li
                      onClick={() => handleSelectedLanguage(language)}
                    >
                      <S.Flag 
                        img={language.value}
                      />
                      <div>{language.title}</div>
                    </li>
                  )
                })
              )
            }
        </S.List>
      )}
    </li>
  )
}

export default LanguageDropDown