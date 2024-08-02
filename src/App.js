
import './App.css';
import NavBar from './NavBar';
import Footer from "./Footer"
function App() {
  return (
    <div className="App">
     <NavBar showSignUp={true} />
     <Footer footerType="about" />
    </div>
  );
}

export default App;
