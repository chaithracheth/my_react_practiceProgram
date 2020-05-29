import React, { Component } from 'react';
import './LeftContainer.css';
import Input from '../Input/Input';
class LeftContiner extends Component
{
    render()
    {
        return(
            <div className="employeeWrapper">
                <Input addNewUser={this.props.addNewUser} b={this.props.b} myBoolean={this.props.myBoolean}/>
            </div>
        )
    }
}
 export default LeftContiner;