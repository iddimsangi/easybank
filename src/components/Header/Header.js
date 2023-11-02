import logo from "../../images/logo.svg";
function Header() {
  return (
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
  );
}

export default Header;
