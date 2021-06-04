import React from 'react';
import './App.css';
import { Home } from './screens/Home/home';
import { Contact } from './screens/Contact/Contact';
import { Projects } from './screens/Projects/Projects';
import { TopNav } from './components/top-nav/top-nav';
import { Footer } from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>
      {/* <TopNav /> */}
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  )

}

export default App;
