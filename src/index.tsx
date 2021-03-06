import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import theme from './config/styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme} resetCSS>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
