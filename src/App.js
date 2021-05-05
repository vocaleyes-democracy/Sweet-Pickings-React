// import logo from './logo.svg';
import './App.css';
import NavBar2 from './Components/NavBar2';
import TopNav from './Components/TopNav';
// import HeaderImg from './Components/HeaderImg';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About/About.js';
import Signup from './Pages/Signup';
import Story from './Pages/About/Story';
import Pickers from './Pages/About/Pickers';
import Growers from './Pages/About/Growers';
import Recipients from './Pages/About/Recipients';
// import Gallery from './Pages/About/Gallery'

function App() {
  return (
    <div>
      <div className="navbar-container">
      <Router>
        <TopNav />
        <NavBar2 />
    
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

          <Route exact path="/story">
            <Story />
          </Route>

          <Route exact path="/pickers">
            <Pickers />
          </Route>

          <Route exact path="/growers">
            <Growers />
          </Route>
          
          <Route exact path="/recipients">
            <Recipients />
          </Route>
          
          {/* Commented out Signup component to stop it from rendering everywhere */}
          {/* <Route>
            <Signup exact path="/signup" />
          </Route> */}
          {/* <Route>
            <Gallery exact path="/gallery" />
          </Route> */}

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
