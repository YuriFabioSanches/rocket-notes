import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { NewNote } from './pages/NewNote'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NewNote />
    </ThemeProvider>
  </React.StrictMode>,
)
