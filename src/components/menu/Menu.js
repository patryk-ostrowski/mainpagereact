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

const Menu = (props) => (
    <div className={props.darkmode? "menu_dark" : "menu"} id="menu">
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
        {props.lang === "pl"? <MenuPl/> : <MenuEn/>}
      </div>
    </div>
  )

export default Menu;