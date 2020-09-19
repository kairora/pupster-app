import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./pages/about"
import Search from "./pages/search"
import Discover from "./pages/discover"
import Nav from "./components/nav"


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
