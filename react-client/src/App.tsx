import React from 'react';
import './App.css';
import { Navigate, RouterProvider, Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { AuthProvider, useAuth } from './AuthContext'



function App() {

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  console.log(window.location.pathname)


  return (
    <AuthProvider>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
