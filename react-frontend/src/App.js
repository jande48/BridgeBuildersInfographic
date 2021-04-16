import './App.css';
import bridgeBuildersLogo from './bridgeBuildersLetterHeadLogo.png'
import Home from './Components/Home'
import Admin from './Components/Admin'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        
        <div className="infographicBlock">
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
