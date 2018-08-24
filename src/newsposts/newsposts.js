import React, { Component } from 'react';
import './newsposts.css';
import User from './posts.js';

class NewsPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
   users: [{
    id: Math.random(), 
    title : "News1",
    src : "News",
    discription: "something about news1",
    upvote: '0'
   },{
    id: Math.random(), 
    title : "News2",
    src : "News",
    discription: "something about news2",
    upvote: '0'
   },{
    id: Math.random(), 
    title : "News3",
    src : "News",
    discription: "something about news3",
    upvote: "0"
   },{
    id: Math.random(), 
    title : "News4",
    src : "News",
    discription: "something about news4",
    upvote: "0"
   },]
  }
}
increaseUp =(newValue) => {
  console.log(this.state.upvote)
}

  // onChange = (e) => {
  //   this.setState({[e.target.name]: e.target.value})
  // }

  // onSubmit =(e) => {
  //   e.preventDefault();
  //   let newState
  //   this.setState({
  //      users: [{
  //   id: Math.random(), 
  //   title : "suraj",
  //   src : "News",
  //   discription: "blha blha",
  //  }]
      
      
  //   })
  //   console.log(this.state)
  // }
  
  
  render() {
    
    return (

<div className="news-style">
<div className="jumbotron">
<h3>post upload</h3>
<hr/>
<br/>
<div className="row">


<form>
<div className="col-sm-6">

<div className="input-group">
<span className="input-group-addon">Title</span>

<input type="text" className="form-control" name="title" placeholder=" enter title"  />
</div>
<br/>
<div className="input-group">
  <span className="input-group-addon"><i className="glyphicon glyphicon-picture"></i></span>
  <input type="text" className="form-control" name="src" placeholder=" enter src"   />
  </div>
  <br/>
  <button className="btn btn-primary button-upload">
  <i className="glyphicon glyphicon-upload" ></i></button>
  </div>
<div className="col-sm-6">
<div className="input-group">
<span className="input-group-addon" >Discription</span> 
<textarea className="form-control" rows="4" name="discription" placeholder=" enter discription" ></textarea>
</div>
</div>
</form>
</div>
</div>

 {//posts
 }
<div className="row">
  <div className="col-sm-2">
    </div>
    <div className="col-sm-8">
      <div className="panel-group">
 {
  this.state.users.map((user)=> {
    return <User increaseUpvote ={this.increaseUp.bind(this, "1")}
    key= {user.id}
    title={user.title} src={user.src} discription={user.discription} upvote= {user.upvote} ></User>
  })
}
    </div>
    </div>
  </div>
</div>   
    )
  }
}

export default NewsPosts;