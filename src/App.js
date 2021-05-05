// import logo from './logo.svg';
import './App.css';
import NavBar2 from './Components/NavBar2';
import TopNav from './Components/TopNav';
// import HeaderImg from './Components/HeaderImg';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About/About.js';
import Signup from './Pages/Signup';
// import Gallery from './Pages/About/Gallery'

import HeaderImg from './Components/HeaderImg'

function App() {
  return (
    <div>
      <div className="navbar-container">
      <Router>
        <TopNav />
        <NavBar2 />
        <HeaderImg />
    
        <Switch>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <Signup exact path="/signup" />
          </Route>
          {/* <Route>
            <Gallery exact path="/gallery" />
          </Route> */}

          </Switch>
        </Router>
        {/* <HeaderImg /> */}
      </div>
    </div>
  );
}

export default App;
