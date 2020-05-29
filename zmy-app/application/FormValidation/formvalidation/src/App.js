import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={username:'',
    age:null,
    error:'',
  
  }
  }
changeHandler=(e) =>
{
  let name=e.target.name;
  let value=e.target.value;
  let err='';
  if(name==="age")
  {
    if(value==="" || !Number(value))
    {
      err= <strong>enter age in number"</strong>
    }
  }

  this.setState({
    [name]:value,
    error:err,
  })
  
}
submitHandler=(e)=>
{
  
  e.preventDefault();
  let age=this.state.age;
  console.log("submmit");
  console.log(age);
  
}
  render(){
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <label>Enter your name</label>{this.state.username.length > 0 ? <h1> your Name:{this.state.username}</h1> : null}
          <input type="text" name="username" onChange={this.changeHandler} />
          {this.state.username.length > 0 ? <h1>Enter your age:{this.state.age}</h1> : null}
          <label>Enter your age</label> <input type="text" name="age" onChange={this.changeHandler} />
          {this.state.error}
          <input type="submit" value="submit" />
          {this.state.username}
        </form>
      </div>
    );
  }

  }
  

export default App;
