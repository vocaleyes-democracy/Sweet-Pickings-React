import logo from './logo.svg';
import './App.css';
import NavBar2 from './Components/NavBar2';
import TopNav from './Components/TopNav';
import HeaderImg from './Components/HeaderImg';

function App() {
  return (
    <div>
      <div className="navbar-container">
        <TopNav />
        <NavBar2 />
      </div>
      {/* Switch for Router */}
      {/* router options */}
      <HeaderImg />
    </div>
  );
}

export default App;
