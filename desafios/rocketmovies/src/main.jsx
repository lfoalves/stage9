import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/global'
import theme from './style/theme'

import './style/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
