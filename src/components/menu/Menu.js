import "./Menu.css";
import moon from "../img/icons/moon.png";
import sun from "../img/icons/sun.png";

const MenuPl = () => (
  <>
    <a href="#up">O mnie</a>
    <a href="#experience">Doświadczenie</a>
    <a href="#portfolio">Projekty</a>
    <a href="#contact">Kontakt</a>
  </>
)

const MenuEn = () => (
  <>
    <a href="#up">About me</a>
    <a href="#experience">Experience</a>
    <a href="#portfolio">Projects</a>
    <a href="#contact">Contact</a>
  </>
)

const DayNightButton = (props) => (
  <>
    {props.darkmode ? <img id="sun" src={sun} alt="O" /> : <img id="moon" src={moon} alt="C" />}
    <input type="checkbox" className="dayNightButton" onChange={props.changeColor} />
  </>
)

const Menu = (props) => (
    <div className={props.darkmode? "menu_dark" : "menu"} id="menu">
      <div className="menu__buttons--options">
        <DayNightButton changeColor={props.changeColor} darkmode={props.darkmode}/>
        <button 
          className="languageButton" 
          onClick={props.changeLanguage}>{props.lang === "pl" ? "EN" : "PL"}
        </button> 
      </div>
      <div className="menu__buttons--nav">
        {props.lang === "pl"? <MenuPl/> : <MenuEn/>}
      </div>
    </div>
  )

export default Menu;