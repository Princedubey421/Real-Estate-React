import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Companies from "./components/Companies/companies";
import Residencies from "./components/Residencies/residencies";
import Value from "./components/Value/value";
import Contact from "./components/Contact/contact";
import GetStarted from "./components/GetStarted/getstarted";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <div className="white-gradient" />
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;