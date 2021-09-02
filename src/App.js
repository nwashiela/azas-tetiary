import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import displaySearch from "../src/component/searchDAta/search";
// import Details from "./componentURL/Details";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={displaySearch} />
        
        </Switch>
      </div>
    </Router>
  );
}
export default App;
 /**
  *   { <Route exact path="/componentURL/:id" component={Details} />}
  */