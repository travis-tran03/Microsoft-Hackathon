import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TextBox from './components/TextBox.jsx'
import Results from './components/Results.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TextBox />
    <Results />
  </React.StrictMode>,
)
