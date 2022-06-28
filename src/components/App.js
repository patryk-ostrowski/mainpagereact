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

  handleChangeDayNightMode = () => {
    this.setState(prevState =>({
      darkModeIsActive: !prevState.darkModeIsActive,
    }))
  }

  handleChangeLanguage = () => {
    if (this.state.language === "pl"){
      this.setState({
        language: "en",
      })
    } else {
      this.setState({
        language: "pl",
      })
    }
  }


  render(){
    const {darkModeIsActive, language} = this.state
  return (
    <div className={darkModeIsActive ? "body__site--dark" : "body__site"}>
      <div id="up"></div>
      <Menu changeColor={this.handleChangeDayNightMode} changeLanguage={this.handleChangeLanguage} darkmode={darkModeIsActive} lang={language} />
      <About darkmode={darkModeIsActive} lang={language}/>
      <Experience darkmode={darkModeIsActive} lang={language}/>
      <Portfolio darkmode={darkModeIsActive} lang={language}/>
      <Contact darkmode={darkModeIsActive} />
    </div>
  );
}}

export default App;