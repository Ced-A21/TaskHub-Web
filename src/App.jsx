import React from "react"
import styles from './App.module.css';
import NavBar from "./components/navbar";
import Hero from "./components/HeroSection";
import Company from "./components/Companies"
import Feature from "./components/Features";

function App() {
  return (
    <div > 
        <NavBar/>
        <Hero/>
        <Company/>
        <Feature/>
    </div>
  );
}

export default App;
