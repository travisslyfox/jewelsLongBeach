import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Spotlight from '../components/Spotlight.tsx'

createRoot(document.getElementById('root')!).render(
  <main>
    <Spotlight/>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </main>
)
