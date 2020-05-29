import React, { Component } from 'react';
import './RightContainer.css';
import Card from '../Input/Card';
class RightContiner extends Component
{
    render()
    {
        return(
            <div className="rightContiner-employe-details">
            <div className="rightContiner-employee">Employee</div>
        <Card employeeList={this.props.employeeList} removeUser={this.props.removeUser} />
            </div>
        )
    }
}
export default RightContiner;