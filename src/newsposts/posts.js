import React from 'react';
import './newsposts.css';
import News from '../assets/News.jpg';

const User = (props) => {

return ( 
      <div>
      <div className="panel panel-primary">
      <div className="panel panel-heading">
      {props.title}
      </div>
      <div className="panel-body">
      <img   src={News} alt={props.src}/>
      <br/>
      <br/>
      <button className="btn"  onClick={props.increaseUpvote}>
      <span><i className="glyphicon glyphicon-chevron-up"></i>
      {props.upvote}
      </span>
      </button>
      </div>
      <div className="panel-footer">
      {props.discription}
      
      </div>
      
      </div>
      <br/>
      <br/>
      </div>
    )
}
export default User;