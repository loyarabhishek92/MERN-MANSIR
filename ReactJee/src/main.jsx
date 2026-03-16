
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Toaster 
    duration={1000}
    position='top-center'
    />
    </>
    
)
