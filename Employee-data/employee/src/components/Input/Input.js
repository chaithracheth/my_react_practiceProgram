import React, { Component } from 'react';
import './Input.css';
import Button from '../Button/Button';
class Input extends Component{
    render()
    {
        return(
            <div className="user-Enter-data">
                <span className="userInformation">Name:-</span><input id="userName" placeholder="Enter your name" className="box-Wrapper" /><br /><br />
              <span className="userInformation">Dob:-</span><input placeholder="Enter date of birth" id="userDob" className="box-Wrapper" /><br /><br />
              <span className="userInformation">Phone:-</span><input id="userNumber" className="box-Wrapper" placeholder="Enter 10 digit pohone number" /><br /><br />
              
              <Button  text="Add User" addNewUser={this.props.addNewUser} myBoolean={this.props.myBoolean} />
            </div>
        )
    }
}
export default Input;