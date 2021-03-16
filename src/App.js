// import logo from './logo.svg';
import './App.css';
// import NavBar2 from './Components/NavBar2';
import TopNav from './Components/TopNav';
import HeaderImg from './Components/HeaderImg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About/About.js';
import Story from './Pages/About/Story';
import Pickers from './Pages/About/Pickers';
import Growers from './Pages/About/Growers';
// import Opportunity from '/Pages/Opportunity';

function App() {
  return (
    <div>
      <Router>
      <div className="navbar-container">
        <TopNav />
        {/* <NavBar2 /> */}
      {/* Switch for Router */}
        <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route path="/about">
              <About  />
            </Route>
            {/* <Route exact path="/about">
              <About  />
            </Route>
            <Route exact path="/about/story">
              <Story />
            </Route>
            <Route exact path="/about/pickers">
              <Pickers />
            </Route>
            <Route exact path="/about/growers">
              <Growers />
            </Route> */}
            {/* <Route path="/opportunity">
              <Opportunity />
            </Route> */}
          </Switch>
      </div>
      {/* router options */}
      <HeaderImg />
        </Router>
    </div>
  );
}

export default App;
