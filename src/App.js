import './App.css';
import Footer from './component/footer';
import Home from './pages/home';
import Bio from './pages/bio';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
/*BROWSER ROUTER*/
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useState } from 'react';

function App() {

    const [navState, setNavState] = useState('')
    const navTab = (index) => {
      setNavState(index)
    }

  return (
  <Router>
      <div className="App">
  
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item btnn nav-button">
          <a><Link className={navState === 1 ? "nav-link active" : "nav-link"}
          onClick={() => navTab(1)}
           to="/"><p className="text-light">Inicio</p></Link></a>
        </li>
        <li className="nav-item btnn nav-button">
          <a><Link className={navState === 2 ? "nav-link active" : "nav-link"}
          onClick={() => navTab(2)}
           to="/Bio"><p className="text-light">Bio</p></Link></a>
        </li>
        <li className="nav-item btnn nav-button">
          <a><Link className={navState === 3 ? "nav-link active" : "nav-link"}
          onClick={() => navTab(3)}
           to="/Portfolio"><p className="text-light">Portafolio</p></Link></a>
        </li>
        <li className="nav-item btnn nav-button">
          <a><Link className={navState === 4 ? "nav-link active" : "nav-link"}
          onClick={() => navTab(4)}
           to="/Contact"><p className="text-light">Contacto</p></Link></a>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route  path="/Bio">
          <Bio/>
        </Route>

        <Route  path="/Portfolio">
          <Portfolio/>
        </Route>

        <Route  path="/Contact">
          <Contact/>
        </Route>
      </Switch>

        <Footer/>
      </div>
  </Router>
  );
}

export default App;