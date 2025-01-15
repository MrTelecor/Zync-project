import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  return (
    <div>
      <h1>¡Bienvenido a Zync!</h1>
      <p>Tu asistente virtual en desarrollo 🚀</p>
    </div>
  );


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}



export default App;







