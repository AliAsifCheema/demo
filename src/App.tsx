import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { sitedata } from "./content/content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartTrading from "./components/StartTrading";

function App() {
  return (
    <div className="App">
      <Header headerData={sitedata.header} />
      <StartTrading />
      <Footer footerData={sitedata.footer} />
    </div>
  );
}

export default App;
