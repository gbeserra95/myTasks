import { useState, useEffect } from 'react'
import { LanguageProvider } from './contexts/language'
import { ItemsProvider } from './contexts/items'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Main from './components/Main'
import Instruction from './components/Instruction'
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'

import { GlobalStyle } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "./styles/themes"

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    function handleLoadingThemeFromLocalStorage() {
      const storedTheme = JSON.parse(localStorage.getItem("isDarkTheme"))
      if (storedTheme === null) {
        localStorage.setItem("isDarkTheme", false)
        setIsDarkTheme(false)
      } else {
        setIsDarkTheme(JSON.parse(localStorage.getItem("isDarkTheme")))
      }
    }

    handleLoadingThemeFromLocalStorage()
  }, [])

  return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <LanguageProvider>
          <ItemsProvider>
            <GlobalStyle />
            <Navigation 
              isDarkTheme={isDarkTheme} 
              setIsDarkTheme={setIsDarkTheme} 
            />
            <Header />
            <Main>
              <Instruction />
              <Input />
              <List />
            </Main>
            <Footer />
          </ItemsProvider>
        </LanguageProvider>
      </ThemeProvider>
  )
}

export default App
