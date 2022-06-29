import "./Contact.css";
import logo from "../img/logo.png";
import linkedin from "../img/icons/linkedin.png";
import instagram from "../img/icons/instagram.png";
import github from "../img/icons/github.png";

const Contact = (props) => {
  return (
    <>
    <section id="contact" className={props.darkmode? "contact_dark" : "contact"}>
      <div className="contact__content">
        <img src={logo} alt="logo" />
        <h2>WEB-DEV Patryk Ostrowski</h2>
          <div className="contact__media">
            <a href="https://www.linkedin.com/in/patrykostrowski/"><img src={linkedin} alt="linkedin" /><p>LinkedIn</p></a>
            <a href="https://www.instagram.com/patrykostry/"><img src={instagram} alt="instagram" /><p>Instagram</p></a>
            <a href="https://github.com/patryk-ostrowski/"><img src={github} alt="github" /><p>GitHub</p></a>  
        </div>
        <div className="footer"><p>© 2022 Patryk Ostrowski</p></div>
      </div>
    </section>
    
    </>
  )
}

export default Contact;