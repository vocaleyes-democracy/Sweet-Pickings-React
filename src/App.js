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
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#9f3e72',
      main: '#880e4f',
      dark: '#5f0937',
      contrastText: '#ffffff',
    },
    // if we want to add a new font family we would do it here. don't forget to import at top of index.css or insert link tag in header of index.html:
    // typography: {
    //   fontFamily: 'family-name'
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
