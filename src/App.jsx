import React from "react"
import styles from './App.module.css';
import NavBar from "./components/navbar";
import Hero from "./components/HeroSection";
import Company from "./components/Companies"
import Feature from "./components/Features";
import BizTool from "./components/BusinessTools"; 
import Numbers from "./components/Statistic";
import Testimonials from "./components/Testimonial";
import Questions from "./components/FAQ";
import Discovery from "./components/Discover";
import FooteR from "./components/Footer";

function App() {
  return (
    <div > 
        <NavBar/>
        <Hero/>
        <Company/>
        <Feature/>
        <BizTool/>
        <Numbers/>
        <Testimonials/>
        <Questions/>
        <Discovery/>
        <FooteR/>
    </div>
  );
}

export default App;
