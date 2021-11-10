import './App.css';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import RegisterPage from './Components/RegisterPage';
import CreateProfilePage from './Components/CreateProfilePage';
import MatchedPage from './Components/MatchedPage';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/Register" component={RegisterPage} />
        <Route exact path="/CreateProfile" component={CreateProfilePage} />
        <Route exact path="/Matched" component={MatchedPage} />
      </switch>
    </div>
  );
}

export default App;
