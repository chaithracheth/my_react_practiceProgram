import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const formValid = formError =>
{
  let valid=true;

  Object.values(formError).forEach(val => {
    val.length >0 && (valid =false)
  });
  return valid;
}

class  App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      firstName:null,
      lastName:null,
      email:null,
      password:null,
      formError:{
        firstName:"",
        lastName:"",
        email:"",
        password:""
      }
    }
  }



  handleSubmit = e => 
  {
    console.log("submit");
    e.preventDefault();
    if(formValid(this.state.formError))
    {
      console.log("firstname {this.state.firstName}");
    }else{
      console.error("error");
    }
  }

  handleChange = e =>
  {
    e.preventDefault();
    const {name,value}=e.target;
   let formError=this.state.formError;
   

   switch(name)
   {
     case "firstName":
       formError.firstName=
       value.length < 3 ? 
       "minimum 3 charcter required"
       :"";
       break;
       case "lastName":
       formError.lastName=value.length < 3  ? "minimum 3 charcter required": "";
       break;
       case "email":
       formError.email=value.length < 3   ? "minimum 3 charcter required": "";
       break;
       case "password":
       formError.password=value.length < 3  ? "minimum 6 charcter required": "";
       break;
       default:
         break;
       
   }
this.setState({formError,[name]:value}, () => console.log(this.state));

  }

  
  render()
 {
  const {formError}=this.state;
    return (
      <div className="Wrapper">
       <div className="FornWrapper">
         <h1>Create account</h1>
         <form onSubmit={this.handleSubmit} noValidate>
  <div className="firstName">
    <label htmlFor="firstName">firstName</label>
    <input onChange={this.handleChange} noValidate className={formError.firstName.length > 0 ? "error" : null } placeholder="First name" type="text" name="firstName"/>
    {formError.firstName.length > 0 && (<span className="errorMsg">{formError.firstName}</span>) }
  </div>
  
  
  <div className="laststName">
    <label htmlFor="lastName">laststName</label>
    <input  onChange={this.handleChange} noValidate placeholder="last name" type="text" name="lastName"/>
    {formError.lastName.length > 0 && (<span className="errorMsg">{formError.lastName}</span>) }
  </div>
  
  <div className="email">
    <label htmlFor="email">email</label>
    <input  onChange={this.handleChange} noValidate placeholder="Email" type="email" name="email"/>
    {formError.email.length > 0 && (<span className="errorMsg">{formError.email}</span>) }
  </div>
  
  <div className="password">
    <label htmlFor="password">password</label>
    <input   onChange={this.handleChange} noValidate placeholder="password" type="password" name="password"/>
    {formError.password.length > 0 && (<span className="errorMsg">{formError.password}</span>) }
 </div>
  </form>
  <div className="CrateAccount">
    <button type="submit">Create account</button>
    <small>all reaDY have an account</small>
  </div>
       </div>
      </div>
    );
  }
  }
  

export default App;
