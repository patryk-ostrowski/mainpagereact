import "./Experience.css";
import html5 from "./img/html5.png";
import css3 from "./img/css3.png";
import jscript from "./img/js.png";
import react from "./img/react.png";
import typescrpit from "./img/typescrpit.png";
import angular from "./img/angular.png";

const ExperiencePl = () => (
  <>
    <div className="html">
      <article>
        <div className="experience__content--img">
          <img src={html5} alt="HTML5" />
        </div>
        <h1>HTML5</h1>
        <ul>
          <li>uporządkowana struktura znaczników w pliku</li>
          <li>stosowanie klas i identyfikatorów</li>
          <li>ułatwianie dostępu - elementy klikalne jako przyciski</li>
        </ul>
      </article>
    </div>
    <div className="css">
      <article>
        <div className="experience__content--img">
          <img src={css3} alt="CSS3" />
        </div>
        <h1>CSS</h1>
          <ul>
            <li>pozycjonowanie elementów za pomocą <span>Grid</span> i <span>Flexbox</span></li>
            <li>animacje z użyciem <span>Transition</span> i <span>Keyframes</span></li>
          </ul>
      </article>
    </div>
    <div className="javascript">
      <article>
        <div className="experience__content--img">
          <img src={jscript} alt="JS" />
        </div>
        <h1>JavaScript</h1>
          <ul>
            <li>pobieranie i obsługa przycisków na stronie</li>
            <li>formatowanie elementów strony</li>
            <li>tworzenie klas i konstruktorów</li>
          </ul>
      </article>
    </div>
    <div className="react">
      <article>
        <div className="experience__content--img">
          <img src={react} alt="React" />
        </div>
        <h1>React</h1>
          <ul>
            <li>pobieranie i obsługa przycisków na stronie</li>
            <li>React Router V6</li>
          </ul>
      </article>
    </div>
    <div className="typescript">
      <article>
        <div className="experience__content--img">
          <img src={typescrpit} alt="TS" />
        </div>
        <h1>TypeScrpit</h1>
          <ul>
            <li>pobieranie i obsługa przycisków na stronie</li>
            <li>formatowanie elementów strony</li>
          </ul>
      </article>
    </div>
    <div className="angular">
      <article>
        <div className="experience__content--img">
          <img src={angular} alt="Angular" />
        </div>
        <h1>Angular</h1>
          <ul>
            <li>pobieranie i obsługa przycisków na stronie</li>
            <li>formatowanie elementów strony</li>
          </ul>
      </article>
    </div>
  </>
)

const ExperienceEn = () => (
  <></>
)

const Experience = (props) => (
  <section id="experience" className={props.darkmode? "experience" : "experience_dark"}>
    {props.lang==="en"? <ExperiencePl />: <ExperienceEn/>}
  </section>
)


export default Experience;