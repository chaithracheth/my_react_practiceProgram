import React, { Component } from 'react'
import  { Link} from 'react-router-dom';
import HomePage from './homePage';


  const user=()=>
  {
    return(
      <div>
         <Link to="/HomePage">
      <button >Login</button> 
        </Link>
      </div>
       
       
    )
    
   
  }
export default user;