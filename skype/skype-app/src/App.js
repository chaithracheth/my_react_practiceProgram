import React, { Component } from 'react';

import './App.css';
import Nav from './nav';
import About from './about';
import  { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends Component {
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
  render()
  {
    return (
      <Router>
       <input type="text" placeholder="Enter your name" name="fname" onChange={this.handleChange}/>
  <div className="App">
       <Nav />
       <Switch>
       <Route path="/" exact component={this.Home}/>
       <Route path="/about" component={About}/>
       
  
       </Switch>
       
      </div>
      </Router>
      
    );
  }
  
 Home= ()=>
  (<div>
  <h1>HOME PAGE</h1>
  </div>
  
  );
  
  }
  
export default App;
