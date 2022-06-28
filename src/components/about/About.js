import "./About.css";
import photo from "../img/me.png";
import {useSpring, animated} from 'react-spring';

const Photo = () => {
  const styles = useSpring({
    loop: false,
    from: { x: -500 },
    to: { x: 0 },
  }) 
  return (
    <>
    <animated.div id="photo_me" style={{...styles}}>
      <img src={photo} alt="my_photo" />
    </animated.div>
  </>
  )
}
  
const Text = () => {
  const styles = useSpring({
    loop: false,
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 1000},
  }) 
  return (
    <>
    <animated.div id="about_text" style={{...styles}}>
      <p id="first_line">Cześć! Jestem Patryk i od młodzieńczych lat interesuję się światem IT. W przeszłości próbowałem swoich sił w programowaniu w różnych językach (C++, C#, Python), jednak postanowiłem zostać Web Developerem.</p>
      <p id="second_line">Obecnie czuję się dobrze jako Front-end Developer, jednak w przyszłości chciałbym zostać Full-stack Developerem.</p>
    </animated.div>
  </>
  )
}

const AboutPl = () =>(
  <div className="about_content">
    <Photo />
    <Text />   
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
  <section id="about" className={props.darkmode? "about_dark" : "about"}>
    {props.lang==="en"? <AboutEn />: <AboutPl/>}
  </section>
)

export default About;