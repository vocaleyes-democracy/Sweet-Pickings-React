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
  // i've updated our color palette bc light and dark don't work using this theme. we'd have to import color objects from Material and then the light and dark versions come along by default. but i couldn't get this functionality to work the way i wanted. not all colors import correctly...
  palette: {
    primary: {
      main: '#c0ca33',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#880e4f',
      contrastText: '#ffffff',
    },
    // if we want to add a new font family we would do it here. don't forget to import at top of index.css or insert link tag in header of index.html. if we're updating font weights we'll need to import those as:
    // typography: {
    //   fontFamily: 'family-name',
    //   fontWeightLight: 400,
    //   fontWeightRegular: 500,
    //   fontWeightMedium: 600,
    //   fontWeightBold: 700
    // }
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

              <Route path="/home">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/story">
                <Story />
              </Route>

              <Route path="/pickers">
                <Pickers />
              </Route>

              <Route path="/growers">
                <Growers />
              </Route>
              
              <Route path="/recipients">
                <Recipients />
              </Route>
              
              <Route path="/tree-form">
                <TreeForm />
              </Route>
              
              <Route path="/contact">
                <Contact />
              </Route>
              
              <Route path="/opportunities">
                <Opportunities />
              </Route>
              
              <Route path="/login">
                <Login />
              </Route>
              
              <Route path="/signup">
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
