import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'

import 'bootstrap/dist/css/bootstrap.min.css';
import KelasPage from './pages/KelasPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
     <Router>
  <div>
   
    
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/detail">
        <KelasPage />
      </Route>
    </Switch>
  </div>
</Router>
    </div>
  );
}

export default App;
