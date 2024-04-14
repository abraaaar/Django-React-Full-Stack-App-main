import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserPage from "./pages/UserPage"
import SurgeonPage from "./pages/SurgeonPage"
import RadiologistPage from "./pages/RadiologistPage"
import TeleradiologistPage from "./pages/TeleradiologistPage"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/user" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
        <Route path="/surgeon" element={<ProtectedRoute><SurgeonPage /></ProtectedRoute>} />
        <Route path="/radiologist" element={<ProtectedRoute><RadiologistPage /></ProtectedRoute>} />
        <Route path="/teleradiologist" element={<ProtectedRoute><TeleradiologistPage /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
