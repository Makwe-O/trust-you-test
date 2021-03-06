import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/reviews/:question/:answer' exact>
            <Detail />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
