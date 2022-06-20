import photo from "./img/me.png";
import "../About.css";

const About_pl = () => {
  return (
    <div className="about_content">
      <div id="photo_me">
        <img src={photo} alt="my_photo" />
      </div>
      <div id="about_text"> 
        <p id="first_line">Cześć! Jestem Patryk i od młodzieńczych lat interesuję się światem IT. W przeszłości próbowałem swoich sił w programowaniu w różnych językach (C++, C#, Python), jednak postanowiłem zostać Web Developerem.</p>
        <p id="second_line">Obecnie czuję się pewnie jako Frontend Developer, jednak w przyszłości chciałbym zostać Fullstack Developerem.</p>
      </div>     
    </div>

  )
}

export default About_pl;