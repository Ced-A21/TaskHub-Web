import React from "react"
import styles from './App.module.css';
import NavBar from "./components/navbar";
import Hero from "./components/HeroSection";
import Company from "./components/Companies"
import Feature from "./components/Features";
import BizTool from "./components/BusinessTools";


function App() {
  return (
    <div > 
        <NavBar/>
        <Hero/>
        <Company/>
        <Feature/>
        <BizTool/>
    </div>
  );
}

export default App;
