import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from "./components/header/Header"
import About from './components/about/About';
import Project from './components/project/Project';
import Skills from './components/Skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
