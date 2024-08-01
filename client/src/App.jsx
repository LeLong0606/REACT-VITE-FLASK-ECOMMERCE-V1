// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import Chat from './components/users/Chat'
// import Home from './components/users/Home'
import MainPage from './components/users/MainPage';
import Login from './components/users/Login';
import Register from './components/users/Register';
import Cart from './components/users/Cart';
import AdminLogin from './components/admin/AdminLogin';
// import AddPay from './components/users/AddPay';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route mặc định khi không có path khớp */}
        <Route path='/' element={<MainPage />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<MainPage />} />
        <Route path='register' element={<Register />} />
        {/* <Route path='addPay' element={<AddPay />} /> */}
        <Route path='cart' element={<Cart />} />
        <Route path='adminLogin' element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App
