// import logo from './logo.svg';
import "./App.css";
// import NavBar2 from './Components/NavBar2';
import TopNav from "./Components/TopNav";
// import HeaderImg from './Components/HeaderImg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About/About.js";
import Signup from "./Pages/Signup";
// import Gallery from './Pages/About/Gallery'

import Helmet from "react-helmet";
import clsx from "clsx";

import { Project as Default } from "@actionishope/shelley/styles/default";

import { Project as Shelley } from "./styles/";

function App() {
  return (
    <>
      <Helmet
        title="Sweet Pickings"
        meta={[
          {
            name: "description",
            content: "Sweet Pickings... insert meta decription."
          },
          { name: "keywords", content: "sample, something" }
        ]}
        htmlAttributes={{
          lang: "en",
          class: clsx(Default, Shelley)
        }}
      />
      {/* <div> */}
      {/* <div className="navbar-container"> */}
      <Router>
        <TopNav />

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/about">
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
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
