import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <NavBar showSignUp={true} />
      <Home />
      <Footer footerType="about" />
    </div>
  );
}

export default App;
