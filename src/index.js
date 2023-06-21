import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Normalize} from 'styled-normalize'
import {Provider} from 'react-redux'
import {theme} from './theme'
import store from './store'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from './GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
