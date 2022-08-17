import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.css'
// import components for routing
// import Navbar from './navbar'
// import About from './about'
import Home from './home'
// import Dashboard from './dashboard'
import Contact from './contact'
import Footer from './footer'
import Quote from './quote'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {/* routing */}
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/contact" component={Contact} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/quote" component={Quote} />
      </div>
    </Router>
  );
}

export default App;
