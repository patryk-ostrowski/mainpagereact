import "./About.css";
import photo from "../img/me.png";


const AboutPl = () => (
  <div className="about_content">
    <div id="photo_me">
      <img src={photo} alt="my_photo" />
    </div>
    <div id="about_text"> 
      <p id="first_line">Cześć! Jestem Patryk i od młodzieńczych lat interesuję się światem IT. W przeszłości próbowałem swoich sił w programowaniu w różnych językach (C++, C#, Python), jednak postanowiłem zostać Web Developerem.</p>
      <p id="second_line">Obecnie czuję się dobrze jako Front-end Developer, jednak w przyszłości chciałbym zostać Full-stack Developerem.</p>
    </div>     
  </div>
)


const AboutEn = () => (
  <div className="about_content">
    <div id="photo_me">
      <img src={photo} alt="my_photo" />
    </div>
    <div id="about_text"> 
      <p id="first_line">Hi! I'm Patryk. From childhood i have insterested in IT world. In the past i tried to programming in other languages (C++, C#, Python), but today I know that I want to be a Web Developer.</p>
      <p id="second_line">In this time I feel fine in Front-end Development, but in the future i want to become a Full-stack Developer.</p>
    </div>     
  </div>
)


const About = (props) => (
  <section id="about" className={props.darkmode? "about" : "about_dark"}>
    {props.lang==="en"? <AboutEn />: <AboutPl/>}
  </section>
)

export default About;