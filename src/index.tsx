import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './components/app'
import ApiServiceContext from './components/api-service-context'
import ApiService from './services/api-service'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ApiServiceContext.Provider value={new ApiService()}>
      <GlobalStyle />
      <App />
    </ApiServiceContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
