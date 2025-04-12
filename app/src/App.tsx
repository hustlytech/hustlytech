import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 200); // Toggle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <img 
          src="/logo.png" 
          alt="Hustly Tech Logo" 
          className="logo" 
          width={150}
          height={150}
        />
        
        <h1 style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
          🚧 Under Construction
        </h1>
        <p>We're building something awesome! Our website will be live soon.</p>
        <p>In the meantime, feel free to reach out:</p>
        
        <div className="contact">
          <p><strong>Hustly Tech</strong><br />
          Freelance Software Solutions: Web, Cybersecurity</p>
          
          <p>
            Email: <a href="mailto:hustlytech@gmail.com">hustlytech@gmail.com</a>
            <br />
            Instagram: <a href="https://www.instagram.com/hustlytech" target="_blank" rel="noopener noreferrer">@hustlytech</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;