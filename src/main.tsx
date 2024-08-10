import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />}/>
        </Routes>
      </Router>
    </NextUIProvider>
  </React.StrictMode>,
)
