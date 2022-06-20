import "./About.css";
import AboutEn from "./About_en/About_en";
import AboutPl from "./About_pl/About_pl"

const About = (props) => {
  return (
    <div className={props.darkmode? "about" : "about_dark"}>
       {props.lang==="en"? <AboutPl />: <AboutEn/>}
    </div>
  )
} 
  


export default About;