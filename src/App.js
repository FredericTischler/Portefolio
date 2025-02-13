import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LeftColumn from './components/LeftColumn';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Aurora from './components/bakcground';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="layout">  {/* Flexbox layout container */}
          <Aurora 
          colorStops={["#00c6ff", "#0072ff", "#001eff"]}
          speed={0.5}
          />
          <LeftColumn />
          <div className="right-column">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
