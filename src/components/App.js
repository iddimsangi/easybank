import logo from "../images/logo.svg";
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
            Take your financila life online. Your Easybank account will be a one
            stop-shop for spending saving. budgeting, investing and much more.
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
      <footer className="App--footer"></footer>
    </div>
  );
}

export default App;
