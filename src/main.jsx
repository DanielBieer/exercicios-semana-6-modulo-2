import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

{/* Linha inserida*/}
import Contato from './pages/Contato.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Contato /> */}
  </React.StrictMode>,
)
