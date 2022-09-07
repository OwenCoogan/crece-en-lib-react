import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Screens/Home';
import HeaderCustom from './components/Header';
import FooterCustom from './components/Footer';
import ContactFormScreen from './Screens/ContactFormScreen';

function App() {
  return (
  <Router>
    <div
      className="p-10"
    >
      <HeaderCustom/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactFormScreen/>} />
      </Routes>
      <FooterCustom/>
    </div>
  </Router>
  );
}

export default App;
