import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
//import About from './pages/About.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <About /> */}
  </StrictMode>,
)
