import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GraphContextProvider } from './context/graph.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <GraphContextProvider>
      <App />
    </GraphContextProvider>
  // </React.StrictMode>,
)
