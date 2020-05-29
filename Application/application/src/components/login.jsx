import React, { Component } from 'react';
import  { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import User from './user';
import HomePage from './homePage';
import "./login.css";


 class login extends Component {
    constructor(props)
    {
        super(props)
        this.state={
                fname:"",
                password:"",

            }
        
    }

    handleChange=(event) =>
    {
        const {name,value}=event.target 
        this.setState({
            [name] : value
        })
        console.log(event.target.value);
    }

onSubmitHandle=(e) =>
{     e.preventDefault();
    console.log("submiting");
}

handaleClick=(e)=>{
    e.preventDefault();
    console.log("sumit button");

}

 render() {
        return (
            
            <div>
                <form onSubmit={this.onSubmitHandle} className="loginForm">
                <input type="text" placeholder="Enter your name" name="fname" onChange={this.handleChange}/><br />
                <input type="password" placeholder="password" name="password" onChange={this.handleChange} /><br />
                </form>
                <Router>
                <User/>
                <Switch>
              
          <Route path="/homePage" component={HomePage}/>
                </Switch>
                
                {this.state.fname}
                {this.state.password}
                
            
            </Router>
            </div>
            
        )
    }
}

export default login;