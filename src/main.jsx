import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global_styles/index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename='/EE-Portfolio_Website/'>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
