import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme.js'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'

function App() {
  const [themeMode, setthemeMode] = useState('light')

  const lightTheme = () => {
    setthemeMode('light')
  }
  const darkTheme = () => {
    setthemeMode('dark')
  }

  // lets change theme vanila HTML CSS JS
  useEffect(() => {
    let currentTheme = document.querySelector('html')
    currentTheme.classList.remove('light', 'dark')
    currentTheme.classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            {/* Theme Button */}
            <ThemeBtn />
            <div className="w-full max-w-sm mx-auto"></div>
            {/* Card */}
            <Card />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
