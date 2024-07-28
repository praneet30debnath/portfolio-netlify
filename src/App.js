import { useEffect, useState } from 'react';
import './App.css';
import logo from './logoWhite.png';
import onepic from './onepic.jpg';
import onepic2 from './onepic2.jpg';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import { reduxActions } from './Redux/Store';
import { useDispatch, useSelector } from 'react-redux';
import Skills from './Components/Skills/Skills';
import LetsConnect from './Components/Contact/LetsConnect';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  function handleAnchorClick(event) {
    event.preventDefault(); // Prevent default anchor behavior
    handleScrollToBottom(event); // Optionally call your scroll to bottom logic
  }

  const handleScrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const dispatch = useDispatch();
  const title = useSelector((state) => state.rootStore.title);
  const showButton = useSelector((state) => state.rootStore.showButton);
  const currentDate = useSelector((state) => state.rootStore.currentDate);

  useEffect(() => {
    document.title = title;

    const checkScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY + windowHeight;

      if (currentScroll >= documentHeight - 10) {
        dispatch(reduxActions.setShowButton({ value: false }));
      } else {
        dispatch(reduxActions.setShowButton({ value: true }));
      }

      const secondSection = document.querySelector('.section-about');
      const secondSectionTop = secondSection.offsetTop;

      if (window.scrollY >= secondSectionTop) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [title, dispatch]);

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    const currentScroll = window.scrollY;
    let nextSection = null;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (currentScroll < sectionTop && !nextSection) {
        nextSection = section;
      }
    });

    if (nextSection) {
      window.scrollTo({ top: nextSection.offsetTop, behavior: 'smooth' });
    }
  };

  const yearsExperience = currentDate.getFullYear() - 2021;
  const monthsExperience = currentDate.getMonth() - 5;

  return (
    <div>
      {showNavbar && (
        <div className='topNavbar'>
          <div class="btn-2">
            <a href="https://drive.google.com/file/d/19_XihZhIZxWoVJIBCruNdt2DSIP8F0pu/view?usp=sharing" target="_blank" rel="noreferrer"><span className='btn-2-span'>DOWNLOAD CV</span></a>
          </div>
          <div class="btn-2">
            <a href="#" target="_blank" rel="noreferrer" onClick={handleAnchorClick}>
              <span className='btn-2-span' onClick={handleScrollToBottom}>LET'S CONNECT</span>
            </a>
          </div>
          <div class="btn-2">
            <a href="https://sunny-marshmallow-9e0d89.netlify.app/" target="_blank" rel="noreferrer"><span className='btn-2-span'>MY PROJECT</span></a>
          </div>
        </div>
      )}
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">PORTFOLIO</span>
            <span className="heading-primary--sub">Praneet Debnath</span>
          </h1>
          <div className="resumeContactParent">
            <a href="https://drive.google.com/file/d/19_XihZhIZxWoVJIBCruNdt2DSIP8F0pu/view?usp=sharing" className="btn btn--white btn--animated" target="_blank" rel="noreferrer">Download CV</a>
            <a href="" className="btn btn--white btn--animated" target="_blank" rel="noreferrer" onClick={handleScrollToBottom}>Let's Connect</a>
            <a href="https://sunny-marshmallow-9e0d89.netlify.app/" className="btn btn--white btn--animated" target="_blank" rel="noreferrer">Discover my project</a>
          </div>
        </div>
      </header>

      <div className="section section-about">
        <div className='sectionInner'>
          <div className="rowSectionAbout">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                KNOW MORE ABOUT ME
              </h2>
            </div>
            <div className='sectionText'>
              <div className="sectionTextInner" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                <h3 className="heading-tertiary u-margin-bottom-small">Hello! My Name is Praneet Debnath</h3>
                <p className="paragraph">I'm a 2022 Passout Grad from KIIT University, Bhubaneshwar. Currently working in a SaaS FinTech company that leverages Artificial Intelligence-based Autonomous Systems to help companies automate Accounts Receivable and Treasury processes.</p>

                <h3 className="heading-tertiary u-margin-bottom-small">MY JOB ROLE - SOFTWARE ENGINEER</h3>
                <p className="paragraph" style={{ marginBottom: "1rem" }}>Result-driven Full Stack Software Engineer with extensive experience of {yearsExperience} years {monthsExperience !== 0 ? (monthsExperience === 1 ? `${monthsExperience} month` : `${monthsExperience} months`) : ''} in developing FinTech applications.</p>
                <p className="paragraph">Experienced in Java, JavaScript, Kubernetes, Redis, and UI enhancements, committed to delivering high-quality, scalable, and robust software solutions.</p>
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
      <div className="section section-life-as-an-engineer">
        <div className='lifeAsEnggParent'>
          <div className="u-center-text u-margin-bottom-big2">
            <h2 className="heading-secondary-white">
              WORK EXPERIENCE
            </h2>
          </div>
          <WorkExperience />
        </div>
      </div>

      <div className="section section-skills">
        <Skills />
      </div>

      <div className="section section-contact">
        <LetsConnect />
      </div>

      {showButton && (
        <div className="pos down-arrow" onClick={handleScroll}></div>
      )}
    </div>
  );
}

export default App;
