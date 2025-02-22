import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About'; // Import the About component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} /> {/* Home Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
        <Route path="/about" element={<About />} /> {/* About Page */}
      </Routes>
    </Router>
  );
}

export default App;
