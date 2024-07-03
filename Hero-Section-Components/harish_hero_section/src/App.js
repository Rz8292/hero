import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Product from './Components/Product';
import Contact from './Components/Contact';
import "./App.css";
function App() {
  return (
    <div className="App overflow-y-scroll no-scrollbar">
      <Navbar/>
      <div className="focus:scroll-auto">
          <Home />
          <About />
          <Services />
          <Product />
          <Contact />
        </div>
    </div>
  );
}

export default App;
