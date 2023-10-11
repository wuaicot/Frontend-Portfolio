import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import LandinPage from './components/Landin/LandinPage';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/ProjectsCards/ProjectsCards';
import Contact from './components/Contact/Contact';
import './App.css';

import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavLink to="/LandinPage">
            <img src={logo} className="App-logo" alt="logo" />
          </NavLink>
        </header>
        <nav className="Nav">
          <ul className="Nav ul">
            {/* <li className="Nav li">
              <NavLink  to="/" className="Nav-link">
                LandinPage
              </NavLink>
            </li> */}
            <li className="Nav li">
              <NavLink to="/home" className="Nav-link">
              Presentation
              </NavLink>
            </li>
            <li className="Nav li">
              <NavLink to="/about" className="Nav-link">
              About me
              </NavLink>
            </li>
            <li className="Nav li">
              <NavLink to="/projects" className="Nav-link">
                experience
              </NavLink>
            </li>
            <li className="Nav li">
              <NavLink to="/contact" className="Nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/landinpage" element={<LandinPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
