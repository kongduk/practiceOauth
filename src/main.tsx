import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App.tsx'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
console.log('전체 env:', import.meta.env);
console.log('전체 import.meta.env:', import.meta.env);
console.log('Client ID:', clientId);

createRoot(document.getElementById('root')!).render( 
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
