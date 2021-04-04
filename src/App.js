import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Users from './Users'
import CreateUser from './CreateUser'
import Home from './Home'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar bg="dark" variant="dark">
          
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link ><Link to="/Contact">Contact</Link></Nav.Link>
            <Nav.Link ><Link to="/list">User List</Link></Nav.Link>
            <Nav.Link ><Link to="/create">Create User</Link></Nav.Link>
          </Nav>

        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
