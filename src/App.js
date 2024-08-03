import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  function handleSectionChange(section) {
    setCurrentSection(section);
  }

  return (
    <div className="App">
      <NavBar onSectionChange={handleSectionChange} showSignUp={true} /> {/* insert  true here to show the button */}
      {currentSection === 'home' && <Home />}
      {currentSection === 'about' && <div>About Section</div>}
      {currentSection === 'services' && <div>Services Section</div>}
      {currentSection === 'contact' && <div>Contact Section</div>}
      <Footer footerType={currentSection} />
    </div>
  );
}

export default App;
