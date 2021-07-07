import "./App.css";
import NavBar from "./components/navBar";
import FooterBar from "./components/footerBar";

import InfoBottomBar from "./components/infoBottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./components/catalog";

import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Catalog></Catalog>

      <InfoBottomBar></InfoBottomBar>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
