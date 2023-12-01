import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TextBox from './TextBox.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TextBox />
  </React.StrictMode>,
)
