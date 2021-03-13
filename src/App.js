import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Route } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Opportunity from './Pages/Opportunity';

function App() {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route to="/about" component={About}/>
        <Route to="/opportunity" component={Opportunity}/>
        <Route to="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
