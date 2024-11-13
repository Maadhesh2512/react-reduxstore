// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './components/Home';  // Import the Home component
import AdmissionForm from './components/AdmissionForm';
import ShowDetails from './components/ShowDetails';
import AdmissionPage from './components/AdmissionPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/admission/new" element={<AdmissionForm />} />
          <Route path="/admission/show" element={<ShowDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
