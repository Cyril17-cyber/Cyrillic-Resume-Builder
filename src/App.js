import React, { useState } from "react";
import "./scss/styles.css";
import Nav from './components/Nav';
import MobileLinks from './components/MobileLinks';
import Footer from './components/Footer';
import Resumes from './components/Resumes';
import Cards from './components/Cards';
import Resume1Texts from './components/resumesData/resume1Texts';
import Home from './components/Home';
import {BrowserRouter as Router} from "react-router-dom"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {

  const [mobileMenu, setMobileMenu] = useState(false);

  function menuSetter() {
      setMobileMenu((prevValue) => {
          return !prevValue
      });
  }

  return (
    <Router>
    <div id="App" className={!mobileMenu? "" : "visibleBurger"}>
      <header className="App-header">
        <Nav
         menuFunction={menuSetter}
         />
         <MobileLinks
          mobileMenu={mobileMenu} 
          menuFunction={menuSetter}
          />

        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/resume' exact component={Resumes} />
        <Route path='/card' exact component={Cards} />
        <Route path='/resume/edit/resume1' exact component={Resume1Texts} />
        </Switch>

        <Footer />
      </header>
    </div>
    </Router>
  );
}

export default App;
