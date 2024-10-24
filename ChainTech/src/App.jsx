import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';  
import Register from './components/Register';  
import User from './components/User';  
import Navbar from './components/Navbar';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
      setIsLoggedIn(false);
  };

    return (
        <Router>
            <div>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
