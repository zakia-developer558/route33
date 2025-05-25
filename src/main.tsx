import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'core-js/stable'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>
)
