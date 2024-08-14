import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Content'
import './index.css'
import './Footer'
import Content from './Content'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Content/>
    < Footer/>
  </StrictMode>,
)
