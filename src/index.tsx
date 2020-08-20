import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'

import App from './components/app'
import ApiServiceContext from './components/api-service-context'
import ApiService from './services/api-service'
import store from './store'

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
    background-color: #2b2b2b;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiServiceContext.Provider value={new ApiService()}>
        <GlobalStyle />
        <App />
      </ApiServiceContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
