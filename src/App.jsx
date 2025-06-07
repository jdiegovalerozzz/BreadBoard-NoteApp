import './App.css'
import Header from './Components/Header'
import Notes from './Components/Notes'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from "./AuthContext";
import PrivateRoute from './PrivateRoute'
import Login from './Components/Login'
import Register from './Components/Register'
import NotePage from './pages/NotePage'

function App() {
  

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Ruta protegida */}
          <Route element={<PrivateRoute />}>
            <Route path="/notes" element={<NotePage/>} />
          </Route>
          
          {/* Ruta por defecto */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App


