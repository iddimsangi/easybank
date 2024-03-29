import logo from "../../images/logo.svg";
import humberIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";
function Header({ isClosed, setIsClosed }) {
  const toggleClose = () => {
    setIsClosed(!isClosed);
  };
  return (
    <nav className="App--nav">
      <img src={logo} alt="logo" className="App--nav-logo" />
      <ul className={isClosed ? "App--nav-drop" : "App--nav-navs"}>
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
      <a href="#" className="btn App--nav-btn reqBtn">
        Request Invite
      </a>
      <a href="#" className="hamburger-menu" onClick={toggleClose}>
        <img src={isClosed ? closeIcon : humberIcon} alt="humberger" />
      </a>
    </nav>
  );
}

export default Header;
