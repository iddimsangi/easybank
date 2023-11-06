import logo from "../../images/whiteEasyLogo.png";
import twitter from "../../images/icon-twitter.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import youtube from "../../images/icon-youtube.svg";
import pinrest from "../../images/icon-pinterest.svg";
function Footer() {
  return (
    <footer className="App--footer">
      <div className="App--footer--container1">
        <img src={logo} alt="logo" className="footerLogo" />
        <ul className="App--footer--container1--socials">
          <li>
            <a href="#">
              <img src={facebook} alt="facebook-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtube} alt="youtube-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pinrest} alt="pinrest-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="instagram-icon" />
              {/* <svg path={instagram}></svg> */}
            </a>
          </li>
        </ul>
      </div>
      <ul className="App--footer--container2">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul className="App--footer--container3">
        <li>
          <a href="#">Carriers</a>
        </li>
        <li>
          <a href="#">Suports</a>
        </li>
        <li>
          <a href="#">Private policy</a>
        </li>
      </ul>
      <div className="App--footer--container4">
        <a href="#" className="btn">
          Request Invite
        </a>
        <p>@EasyBank.All rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
