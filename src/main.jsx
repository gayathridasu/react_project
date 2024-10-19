import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// import Hi from "../images/image"
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  {/* <Hi></Hi> */}
  </StrictMode>,
)
