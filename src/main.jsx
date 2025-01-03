import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reduxStore from './redux-store/reduxStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={reduxStore}>
  
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
)
