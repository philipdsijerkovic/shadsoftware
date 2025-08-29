import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Section1 from './Section1.tsx'
import Section2 from './Section2.tsx'
import Section3 from './Section3.tsx'
import Technologies from './Technologies.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Section1 />
    <Section2 />
    <Section3 />
    <Technologies />
  </StrictMode>,
)
