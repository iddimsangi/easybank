import logo from "../images/logo.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import pinrest from "../images/icon-pinterest.svg";
import phone from "../images/image-mockups.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <nav className="App--nav">
        <img src={logo} alt="logo" className="App--nav-logo" />
        <ul className="App--nav-navs">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
        <a href="#" className="btn App--nav-btn">
          Request Invite
        </a>
      </nav>
      <main className="App--main">
      <header className="App--main-header">
        <div className="firstDv">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financila life online. Your Easybank<br/> account will be a one
            stop-shop for spending saving.<br/> budgeting, investing and much more.
          </p>
          <a className="btn firstDv-btn" href="#">
            Request Invite
          </a>
        </div>
        <div className="secondDv">
          <img src={phone} alt="phone" />
        </div>
      </header>
      </main>
      <footer className="App--footer">
        <div className="App--footer--container1">
        <img src={logo} alt="logo" className="footerLogo"/>
        <ul className="App--footer--container1--socials">
          <li>
          <img src={facebook} alt="facebook-icon"/>
          </li>
          <li>
          <img src={twitter} alt="twitter-icon"/>
          </li>
          <li>
          <img src={youtube} alt="youtube-icon"/>
          </li>
          <li>
          <img src={pinrest} alt="pinrest-icon"/>
          </li>
          <li>
          <img src={pinrest} alt="pinrest-icon"/>
          </li>
        </ul>
        </div>
        <ul className="App--footer--container1--container2">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <ul className="App--footer--container3">
          <li><a href="#">Carriers</a></li>
          <li><a href="#">Suports</a></li>
          <li><a href="#">Private policy</a></li>
        </ul>
        <div>
          <a href="#" className="btn">Request Invite</a>
          <p>@EasyBank.All rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
