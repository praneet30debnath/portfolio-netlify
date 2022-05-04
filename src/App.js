
import logo from './logoWhite.png'
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [title, setTitle] = useState("PD's Coding | Portfolio | v1.0");

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  return (
    <div>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">PORTFOLIO</span>
            <span className="heading-primary--sub">Praneet Debnath</span>
          </h1>
          <a href="https://currency-react-project.herokuapp.com/" className="btn btn--white btn--animated" target="_blank">Discover my project</a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              KNOW MORE ABOUT ME
            </h2>
          </div>

          <div className="row">
            <div className="col-2-of-3" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
              <h3 className="heading-tertiary u-margin-bottom-small">Hello!  My Name is Praneet Debnath</h3>
              <p className="paragraph">I'm a 2022 Passout Grad from KIIT University, Bhubaneshwar. Currently working in a SaaS FinTech company that leverages Artificial Intelligence-based Autonomous Systems to help companies automate Accounts Receivable and Treasury processes.</p>

              <h3 className="heading-tertiary u-margin-bottom-small">MY JOB ROLE - FRONTEND DEVELOPER</h3>
              <p className="paragraph">I am in duty of making dashboards for Receivable Analytics of B2B Business Clients using technical stack - ReactJS | HTML | CSS | MaterialUI | JSON | HighCharts | Crossfilter</p>

              <a href="https://drive.google.com/file/d/1BWkZsncnuW2MxAHvoqK4SfOPCXLPukl-/view?usp=sharing" target="_blank" className="btn-text" style={{paddingLeft: '1rem', paddingRight: '1rem'}}>MY RESUME &rarr;</a>
            </div>
            <div className="col-1-of-3">Image Composition</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
