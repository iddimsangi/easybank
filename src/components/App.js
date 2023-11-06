import { useState } from "react";
import Whycomponent from "./Whycomponent/Whycomponent";
import Home from "./Home/Home";
import Latestarticle from "./Latestarticle/Latestarticle";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./App.scss";
function App() {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div className="App">
      <Header setIsClosed={setIsClosed} isClosed={isClosed} />
      <main className="App--main">
        <Home />
        <Whycomponent />
        <Latestarticle />
      </main>
      <Footer />
    </div>
  );
}

export default App;
