import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LeftColumn from './components/leftcolumn/LeftColumn';
import Home from './pages/home/Home';
import AboutMe from './pages/aboutme/AboutMe';
import Projects from './pages/projects/Projects';
import NotFound from './pages/notfound/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Aurora from './components/aurora/bakcground';

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
