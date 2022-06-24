import "./Menu.css";
import moon from "./icons/moon.png";
import sun from "./icons/sun.png";

<<<<<<< HEAD
const MenuPl = () => (
  <>
    <a href="#up">O mnie</a>
    <a href="#experience">Doświadczenie</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Kontakt</a>
  </>
)

const MenuEn = () => (
  <>
    <a href="#up">About me</a>
    <a href="#experience">Experience</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </>
)


=======
>>>>>>> 2d36e0e63db3f8aef80beef2679a130ead1d8f7a
const Menu = (props) => {
  console.log(props.darkmode);
  console.log(props.lang);
  return (
<<<<<<< HEAD
    <div className='Menu' id="menu">
      <div className="menu__buttons--options">
        <button 
          className="dayNightButton" 
          onClick={props.changeColor}>{props.darkmode ? <img src={sun} alt="O" /> : <img src={moon} alt="C" />}
        </button>
        <button 
          className="languageButton" 
          onClick={props.changeLanguage}>{props.lang === "pl" ? "EN" : "PL"}
        </button>
      </div>
      <div className="menu__buttons--nav">
        {props.lang === "pl"? <MenuEn/> : <MenuPl/>}
      </div>
=======
    <div className='Menu'>
      <button className="dayNightButton" onClick={props.changeColor}>{props.darkmode ? <img src={moon} alt="C" /> : <img src={sun} alt="O" />}</button>
      <button className="languageButton" onClick={props.changeLanguage}>{props.lang === "pl" ? "EN" : "PL"}</button>
>>>>>>> 2d36e0e63db3f8aef80beef2679a130ead1d8f7a
    </div>
  )
}

export default Menu;