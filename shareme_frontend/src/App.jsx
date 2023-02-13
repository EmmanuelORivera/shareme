import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'

function App() {
  console.log(import.meta.env.VITE_GOOGLE_API_TOKEN)
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App