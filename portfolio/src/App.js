import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from "../src/Pages/Projects";
import Contact from "../src/Pages/Contact";
import NavBar from '../src/Components/Nav/Nav';
import Home from "../src/Pages/Home";


function App() {
  return (
    <Router >
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contacts" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
