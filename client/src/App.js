import React from "react";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Nav from "./Components/Nav"
import Home from "./Components/Home/Home"
import Teacher from "./Components/Teacher/Teacher"
import Game from "./Components/Game/Game"
let gameBool = false;
const App = (props) =>
<Router>
<div>

    <Switch>
    
    {
      (gameBool) 
      ? <Route exact path = "/Game" component={Game} />
      : <Route exact path = "/" component={Home} />
      }
   
    <Route exact path = "/teacher" component={Teacher} />
    
    </Switch>
</div>
  </Router>
 

export default App;
