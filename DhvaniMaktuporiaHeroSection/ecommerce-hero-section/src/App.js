import React, {useState} from "react";
import TopWidget from "./components/navbarComponents/top-sales-widget";
import Navbar from '../src/components/navbar';
import HeroSection from '../src/components/hero';
import './App.css';

function App() {
  const [showWidget, setShowWidget] = useState(true);

    function closeBtnClick() {
        setShowWidget(false);
    }
  return (
    <>
      {showWidget && (<TopWidget handleClick={closeBtnClick}/>)}
      <Navbar topWidget={showWidget}/>
      <HeroSection/>
    </>
  );
}

export default App;
