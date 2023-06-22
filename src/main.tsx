import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
