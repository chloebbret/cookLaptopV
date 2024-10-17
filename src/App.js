import logo from './logo.png';
import './styles/App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="sign">
          <button className="signIn">Sign IN</button>
          <button className="signUp">Sign UP</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenue sur Cook !</p>

        <div className="goToSite">
          <a href="./pages/Dashboard.js">Entrez -></a>
        </div>
      </header>
    </div>
  );
}

export default App;
