import { createRoot } from 'react-dom/client'
import './index.css'
import { Routing } from './config/Routing.tsx'

createRoot(document.getElementById('root')!).render(
    <Routing />
)
