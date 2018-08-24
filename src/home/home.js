import React, { Component } from 'react';
import './home.css';
import News from '../assets/News.jpg';
class Home extends Component {
  render() {
    return (
    <div className="home-style">
        <h1 className="sasa">WELCOME TO</h1>
        <img src={News} alt="newpic"/>
      </div>
      
    );
  }
}

export default Home;