import { createRoot } from 'react-dom/client'
import './index.css'
import { Routing } from './config/Routing.tsx'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
    <>
        <Analytics />
        <Routing />
    </>
)
