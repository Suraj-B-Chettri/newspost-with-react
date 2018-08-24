import React, { Component } from 'react';
import './App.css';
import news from './assets/news.png';
import Home from './home/home.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Login from './login/login.js';
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import NewsPosts from './newsposts/newsposts';

class App extends Component {
  render() {
    return (
      <div>

  {//navigation bar
  }
   <nav className="navbar navbar-default">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <Router>
        <div>
      <a  className="navbar-brand"><img className = "brand-img" src={news}  alt="nothing"/></a>
      </div>
      </Router>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
    
       <div>
      <Router>
        <div>
      <ul className="nav navbar-nav navbar-right">
        <li><NavLink to="/home" exact>Home</NavLink></li>
        <li><NavLink to ="/login">USER <span className="glyphicon glyphicon-user"></span></NavLink></li>
        
      </ul>
      <Route path="/" exact strict component={Home}/>
      <Route path="/home" exact strict component={Home}/>
      <Route path="/login" exact strict component={Login}/>
      <Route path="/news" exact strict component={NewsPosts}/>
      </div>
      </Router>
    </div>
    </div>
  </div>
</nav>

      </div>
    );
  }
}

export default App;
