import "./Experience.css";
import html5 from "../img/html5.png";
import css3 from "../img/css3.png";
import jscript from "../img/js.png";
import react from "../img/react.png";
import typescrpit from "../img/typescrpit.png";
// import angular from "../img/angular.png";

const ExperiencePl = () => (
  <>
    <h1 className="experience__title">Obecne doświadczenie</h1>
    <div className="html">
      <article>
        <div className="experience__content--img">
          <img src={html5} alt="HTML5" />
        </div>
        <h2>HTML5</h2>
        <ul>
          <li>Uporządkowana struktura znaczników w pliku</li>
          <li>Stosowanie klas i identyfikatorów</li>
          <li>Metodologia BEM</li>
        </ul>
      </article>
    </div>
    <div className="css">
      <article>
        <div className="experience__content--img">
          <img src={css3} alt="CSS3" />
        </div>
        <h2>CSS</h2>
          <ul>
            <li>Pozycjonowanie elementów za pomocą Grid i Flexbox</li>
            <li>Animacje z użyciem Transition i Keyframes</li>
            <li>Resposive Web Design</li>
          </ul>
      </article>
    </div>
    <div className="javascript">
      <article>
        <div className="experience__content--img">
          <img src={jscript} alt="JS" />
        </div>
        <h2>JavaScript</h2>
          <ul>
            <li>Formatowanie i obsługa elementów za pomocą DOM</li>
            <li>Używanie klas i konstruktorów</li>
          </ul>
      </article>
    </div>
    <div className="react">
      <article>
        <div className="experience__content--img">
          <img src={react} alt="React" />
        </div>
        <h2>React</h2>
          <ul>
            <li>Budowanie elementów strony za pomocą modułów</li>
            <li>Przekazywanie elementów przez props</li>
            <li>React Router V6</li>
          </ul>
      </article>
    </div>
    <div className="typescript">
      <article>
        <div className="experience__content--img">
          <img src={typescrpit} alt="TS" />
        </div>
        <h2>TypeScrpipt</h2>
          <ul>
            <li>Typowanie zmiennych</li>
            <li><span>Nauka w toku</span></li>
          </ul>
      </article>
    </div>
    {/* <div className="angular">
      <article>
        <div className="experience__content--img">
          <img src={angular} alt="Angular" />
        </div>
        <h2><span>Angular</span></h2>
          <ul>
            <li><span>Zaplanowana nauka w przyszłości</span></li>
          </ul>
      </article>
    </div> */}
  </>
)

const ExperienceEn = () => (
  <>
    <h1 className="experience__title">Today experience</h1>
    <div className="html">
      <article>
        <div className="experience__content--img">
          <img src={html5} alt="HTML5" />
        </div>
        <h2>HTML5</h2>
        <ul>
          <li>Tidy markers structure</li>
          <li>Using classes and Id's</li>
          <li>BEM metodology</li>
        </ul>
      </article>
    </div>
    <div className="css">
      <article>
        <div className="experience__content--img">
          <img src={css3} alt="CSS3" />
        </div>
        <h2>CSS</h2>
          <ul>
            <li>Positioning with Grid & Flexbox</li>
            <li>Transition & Keyframes animations</li>
            <li>Resposive Web Design</li>
          </ul>
      </article>
    </div>
    <div className="javascript">
      <article>
        <div className="experience__content--img">
          <img src={jscript} alt="JS" />
        </div>
        <h2>JavaScript</h2>
          <ul>
            <li>DOM - format and handle elements</li>
            <li>Using classes and constructors</li>
          </ul>
      </article>
    </div>
    <div className="react">
      <article>
        <div className="experience__content--img">
          <img src={react} alt="React" />
        </div>
        <h2>React</h2>
          <ul>
            <li>Building modules</li>
            <li>Using props</li>
            <li>React Router V6</li>
          </ul>
      </article>
    </div>
    <div className="typescript">
      <article>
        <div className="experience__content--img">
          <img src={typescrpit} alt="TS" />
        </div>
        <h2>TypeScrpipt</h2>
          <ul>
            <li>Typing variables</li>
            <li><span>Learning in progress</span></li>
          </ul>
      </article>
    </div>
    {/* <div className="angular">
      <article>
        <div className="experience__content--img">
          <img src={angular} alt="Angular" />
        </div>
        <h2><span>Angular</span></h2>
          <ul>
            <li><span>Will be learning in future</span></li>
          </ul>
      </article>
    </div> */}
  </>
)

const Experience = (props) => (
  <section id="experience" className={props.darkmode? "experience_dark" : "experience"}>
    {props.lang==="en"? <ExperienceEn />: <ExperiencePl/>}
  </section>
)


export default Experience;