// import logo from './logo.svg';
import './App.css';
// import NavBar2 from './Components/NavBar2';
import TopNav from './Components/TopNav';
// import HeaderImg from './Components/HeaderImg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About/About.js';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
      <div className="navbar-container">
      <Router>
        <TopNav />
    
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route>
              <Signup path="/signup" />
            </Route>
          </Switch>
        </Router>
        {/* <HeaderImg /> */}
      </div>
    </div>
  );
}

export default App;
