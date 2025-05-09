import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PasswordProtect from './components/PasswordProtect.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PasswordProtect>
      <App />
    </PasswordProtect>
  </React.StrictMode>,
)
