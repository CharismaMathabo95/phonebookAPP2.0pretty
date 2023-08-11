import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
import PhoneBookPage from './PhoneBookPage';
import NewEntry from './nEntry';
import NewPhoneBook from './nPhoneBook';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PhoneBookPage />} />
          <Route path="/NewEntry" element={<NewEntry />} />
          <Route path="/NewPhoneBook" element={<NewPhoneBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

