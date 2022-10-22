import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/global'
import theme from './style/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
)
