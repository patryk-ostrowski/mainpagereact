import './App.css';
import React, { Component } from 'react';
import About from './about/About';
import Experience from './experience/Experience';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Menu from './menu/Menu';

class App extends Component {
  state = {
    darkModeIsActive: false,
    language: "pl",
  }
  render(){
  return (
    <>
      <Menu />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}}

export default App;