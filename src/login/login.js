import React, { Component } from 'react';
import './login.css';
import "../newsposts/newsposts.js";
import "../newsposts/posts.js";
class Login extends Component {
constructor(props){
  super(props);
  this.state = {
    username: '',
    password: '',
  }
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
}

onChange=(e) => {
  this.setState({[e.target.name]: e.target.value})
}
onSubmit(e) {
  e.preventDefault();
  if(this.state.username.length !== 0 && this.state.password.length !== 0){
  if(this.state.username === "admin" && this.state.password ==="admin" ){ 
    this.props.history.push("/news");
  
console.log(this.state);
  } else if((this.state.username === "user1" &&  this.state.password ==="user1" )||( this.state.username === "user2" &&  this.state.password ==="user2")){
    this.props.history.push("/User");
  } else{
    window.alert("enter valid username and password!");
  }
} else {
  window.alert("username or password fields are empty");
}
}


  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <div className="login-style">
      <div className="panel panel-primary">
      <div className="panel-heading">
      <h2>Login</h2>
      </div>
      <div className="panel-body">
      <br/>
      <hr/>
      <input type="text"
      className="form-control"
      placeholder="Enter your Username"
      name="username"
      value={this.state.username}
      onChange={this.onChange}
      />
      <br/>
      <hr/>
      <input type="password"
      className="form-control"
      name="password"
      value={this.state.password}
      onChange={this.onChange}
      placeholder="Enter your Password"/>
      <br/>
      <hr/>
      </div>
      <div className="panel-footer">
      <button className="btn btn-success">Login</button>
      </div>
      </div>
      </div>
       </form>

      
    );
  }
}

export default Login;
