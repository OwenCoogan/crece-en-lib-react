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
      className=" bg-primary-200 dark:bg-gray-800 h-screen"
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
