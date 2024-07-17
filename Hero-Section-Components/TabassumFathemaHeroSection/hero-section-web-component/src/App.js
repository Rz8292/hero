import React from 'react';
import './App.css';
import logo from './logo.jpg'; 

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Code with Confidence: Craft, Reuse, and Master Web Components</h1>
        <img src={logo} alt="Logo" className="header-image" />
        <p>Empower Your Development with Community-Created Components</p>
      </header>
      <section className="features">
        <Feature
          icon="🎨"
          title="Creative Component Crafting"
          description="Design and develop components with unmatched creativity. Tailor them to your project's needs and share them with the community."
        />
        <Feature
          icon="🔄"
          title="Reuse and Recycle"
          description="Don't reinvent the wheel. Find pre-built components and adapt them to your use case, saving time and effort."
        />
        <Feature
          icon="📚"
          title="Learn and Grow"
          description="Expand your knowledge with tutorials and guides created by experienced developers. Stay ahead of the curve."
        />
      </section>
      <section className="coming-soon">
        <h2>Hot Off the Press: New Components Coming Soon!</h2>
        <p>Stay tuned for fresh, innovative components being cooked up by our talented community.</p>
        <p>By Tabassum Fathema</p>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature">
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default App;