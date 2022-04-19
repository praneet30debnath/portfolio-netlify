
import logo from './mlml.png'
import './App.css';

function App() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">PORTFOLIO</span>
          <span className="heading-primary-sub">Praneet Debnath</span>
        </h1>
        <a href="#" className="btn btn-white btn-animated">Discover my projects</a>
      </div>
    </header>
  );
}

export default App;
