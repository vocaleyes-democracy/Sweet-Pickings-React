// import logo from './logo.svg'
import './App.css'
// import NavBar2 from './Components/NavBar2'
import NavBar from './Components/NavBar'
import TopNav from './Components/TopNav'
// import HeaderImg from './Components/HeaderImg'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Materia UI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Home from './Pages/Home'
import About from './Pages/About/About.js'
// import Signup from './Pages/Signup';
import Story from './Pages/About/Story'
import Pickers from './Pages/About/Pickers'
import Growers from './Pages/About/Growers'
import Recipients from './Pages/About/Recipients'
import TreeForm from './Pages/TreeForm'
import Contact from './Pages/Contact'
import Opportunities from './Pages/Opportunities'
import Login from './Pages/auth/Login'
import Signup from './Pages/auth/Signup'
// import Gallery from './Pages/About/Gallery'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ccd45b',
      main: '#c0ca33',
      dark: '#868d23',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      // main: '#f44336',
      // main: '#a02725',
      main: '#212121',
    },
  },
});

function App() {
  return (
    <div>
      <div className="navbar-container">
      <ThemeProvider theme={theme}>
          <Router>
            {/* <Layout> */}
            <TopNav />
            <NavBar />
        
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
              
              <Route exact path="/tree-form">
                <TreeForm />
              </Route>
              
              <Route exact path="/contact">
                <Contact />
              </Route>
              
              <Route exact path="/opportunities">
                <Opportunities />
              </Route>
              
              <Route exact path="/login">
                <Login />
              </Route>
              
              <Route exact path="/signup">
                <Signup />
              </Route>
              
              {/* Commented out Signup component to stop it from rendering everywhere */}
              {/* <Route>
                <Signup exact path="/signup" />
              </Route> */}
              {/* <Route>
                <Gallery exact path="/gallery" />
              </Route> */}

              </Switch>
            {/* </Layout> */}
            </Router>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
