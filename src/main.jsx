import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// enables routing across app
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// wrap App in BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
