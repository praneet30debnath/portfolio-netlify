
import logo from './logoWhite.png'
import './App.css';
import { useState, useEffect } from 'react';
import onepic from './onepic.jpg';
import onepic2 from './onepic2.jpg';

function App() {

  const [title] = useState("PD's Coding | Portfolio | v1.0");

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);


  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const currentScroll = window.scrollY;
    if (currentScroll === 0) {
      window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    } else {
      const nextPageStart = Math.ceil(currentScroll / windowHeight) * windowHeight;
      window.scrollTo({ top: nextPageStart, behavior: 'smooth' });
    }
  };



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
          <a href="https://sunny-marshmallow-9e0d89.netlify.app/" className="btn btn--white btn--animated" target="_blank" rel="noreferrer">Discover my project</a>
        </div>
      </header>

      <div className="section-about">
        <div className='sectionInner'>
          <div className="rowSectionAbout">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                KNOW MORE ABOUT ME
              </h2>
            </div>
            <div className='sectionText'>

              <div className="sectionTextInner" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                <h3 className="heading-tertiary u-margin-bottom-small">Hello!  My Name is Praneet Debnath</h3>
                <p className="paragraph">I'm a 2022 Passout Grad from KIIT University, Bhubaneshwar. Currently working in a SaaS FinTech company that leverages Artificial Intelligence-based Autonomous Systems to help companies automate Accounts Receivable and Treasury processes.</p>

                <h3 className="heading-tertiary u-margin-bottom-small">MY JOB ROLE - SOFTWARE ENGIEER</h3>
                <p className="paragraph" style={{ marginBottom: "1rem" }}>Experienced full-stack developer adept at crafting robust solutions, leveraging 2 years of expertise across front-end, back-end, and databases.</p>
                <p className="paragraph">Migration from ASG to K8s framework, enhancing performance and scalability seamlessly within tight timelines.</p>

                <a href="https://drive.google.com/file/d/1pc8vdQ_uZSJGHw8GGd5DkFug0DtzWpQz/view?usp=sharing" target="_blank" className="btn-text" style={{ paddingLeft: '1rem', paddingRight: '1rem' }} rel="noreferrer">MY RESUME &rarr;</a>
              </div>
              <div className="myPic">
                <div className="composition">
                  <img src={onepic} alt="DP 1" className="composition__photo composition__photo--p1" />
                  <img src={onepic2} alt="DP 2" className="composition__photo composition__photo--p2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-life-as-an-engineer">
        <div className='lifeAsEnggParent'>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary-white">
              LIFE AS A SOFTWARE ENGINEER
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <h3 className="heading-tertiary u-margin-bottom-small-white">WAKE UP AND GET READY</h3>
              <li className="bullet-points" style={{ marginBottom: "1rem" }}>Office hoodies are the best.</li>
              <li className="bullet-points">That morning air during rapido rides hit hard.</li>
            </div>

            <div className="col-1-of-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <h3 className="heading-tertiary u-margin-bottom-small-white">LET'S DO THE CODING</h3>
              <li className="bullet-points" style={{ marginBottom: "1rem" }}>Those Java classes and JS codes work MAGICALLY.</li>
              <li className="bullet-points" style={{ marginBottom: "1rem" }}>YAMLs are now part of life ever since K8s came into picture</li>
              <li className="bullet-points">Logging efforts in JIRA</li></div>

            <div className="col-1-of-3" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <h3 className="heading-tertiary u-margin-bottom-small-white">BACK TO HOME</h3>
              <li className="bullet-points" style={{ marginBottom: "1rem" }}>Traffic is really bad BTW</li>
              <li className="bullet-points" style={{ marginBottom: "1rem" }}>NETFLIX</li>

            </div>
          </div>
        </div>
      </div>
      <div class="pos down-arrow" onClick={handleScroll}></div>
    </div>
  );
}

export default App;
