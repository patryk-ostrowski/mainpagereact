import "./Portfolio.css";
import mainOld from "../img/main--old.jpg";
import cassino from "../img/cassino.jpg";
import html5 from "../img/html5.png";
import css3 from "../img/css3.png";
import jscript from "../img/js.png";
// import react from "../img/react.png";

const ImageHtmlCssJs = () => (
  <div className="portfolio__icons">
    <img src={html5} alt="html" />
    <img src={css3} alt="css3" />
    <img src={jscript} alt="js" /> 
  </div> 
)


const PortfolioPl = () => (
    <>
      <h1 className="portfolio__title">Wykonane projekty</h1>
      <div className="portfolio__main">
        <article>
          <a href="https://patryk-ostrowski.github.io/MainPage/">
            <div className="portfolio__content--img">
              <img src={mainOld} alt="main-old" />
            </div>
            <h2>Starsza wersja strony - wizytówki</h2>
          </a>
          <ImageHtmlCssJs/>        
          <h3>Responsywność na smartfonie - w pionie i w poziomie</h3>
          <p>Pierwsza wykonana strona od zera, bez używania gotowych szablonów. Zastosowałem różne właściwości pozycjonowania elementów oraz animacji przycisków.</p>       
        </article>
      </div>
      <div className="portfolio__main">
        <article>
          <a href="https://patryk-ostrowski.github.io/cassino/">
            <div className="portfolio__content--img">
              <img src={cassino} alt="cassino" />
            </div>
            <h2>Cassino Rojal</h2>
          </a>
          <ImageHtmlCssJs/> 
          <h3>Responsywność na smartfonie - w poziomie</h3>
          <p>Prosty symulator automatu z kasyna. W klasie Game zastosowałem konstruktor, który zmienia tabelę losującą po osiągnięciu przez gracza pewną ilośc pieniędzy, co może ułatwić lub utrudnić grę.</p>
        </article>
      </div>
    </>
)


const PortfolioEn = () => (
  <>
    <h1 className="portfolio__title">My Projects</h1>
    <div className="portfolio__main">
      <article>
        <a href="https://patryk-ostrowski.github.io/MainPage/">
          <div className="portfolio__content--img">
            <img src={mainOld} alt="main-old" />
          </div>
          <h2>Old version of My site</h2>
        </a>
        <ImageHtmlCssJs/> 
        <h3>Responsibility on smartphone - horizontal and vertical</h3>
        <p>My first site from scratch, without template generator. Used Grid and Flexbox to positioning elements. Maked animations for buttons.</p>       
      </article>
    </div>
    <div className="portfolio__main">
      <article>
        <a href="https://patryk-ostrowski.github.io/cassino/">
          <div className="portfolio__content--img">
            <img src={cassino} alt="cassino" />
          </div>
          <h2>Cassino Rojal</h2>
        </a>
        <ImageHtmlCssJs/> 
        <h3>Responsibility on smartphone - horizontal</h3>
        <p>Simply cassino machine simulator. Used constructor in class Game for changing random roller generator. For some player cash value it could change lucky to better or worse.</p>
      </article>
    </div>
  </>
)


const Portfolio = (props) => (
  <section id="portfolio" className={props.darkmode? "portfolio" : "portfolio_dark"}>
    {props.lang==="en"? <PortfolioEn />: <PortfolioPl/>}
  </section>
)

export default Portfolio;