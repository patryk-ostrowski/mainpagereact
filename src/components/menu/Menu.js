import "./Menu.css";
import moon from "./icons/moon.png";
import sun from "./icons/sun.png";

const Menu = (props) => {
  console.log(props.darkmode);
  console.log(props.lang);
  return (
    <div className='Menu'>
      <button className="dayNightButton" onClick={props.changeColor}>{props.darkmode ? <img src={moon} alt="C" /> : <img src={sun} alt="O" />}</button>
      <button className="languageButton" onClick={props.changeLanguage}>{props.lang === "pl" ? "EN" : "PL"}</button>
    </div>
  )
}

export default Menu;