import phone from "../../images/image-mockups.png";
function Home() {
  return (
    <header className="App--main-header">
      <div className="firstDv">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financila life online. Your Easybank
          <br /> account will be a one stop-shop for spending saving.
          <br /> budgeting, investing and much more.
        </p>
        <a className="btn firstDv-btn" href="#">
          Request Invite
        </a>
      </div>
      <div className="secondDv">
        <img src={phone} alt="phone" />
      </div>
    </header>
  );
}

export default Home;
