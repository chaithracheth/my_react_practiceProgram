import React, { Component } from 'react';
import './Card.css';
import DeleteButton from '../Button/DeleteButton'
import Button from '../Button/Button';

class Card extends Component {
  render() {
    return (
      <div>

        {this.props.employeeList.map((value, index) => (
          <div>
            <div className="companyNameWrapper"><span className="company-name">welcome to Razorthink </span><span className="userName-style">{value.name}</span>
            </div>
            <div className="right-Continer-display">
              <div className="userDisplay-Wrapper">
                <span className="userInformation-display">Name:-{value.name}</span><br></br>
                <span className="userInformation-display">Dob:-{value.Dob}</span><br></br>
                <span className="userInformation-display">Number:-{value.number}</span><br></br>
                <DeleteButton removeUser={this.props.removeUser} text1="X" />
               
              </div>


            </div>
          </div>
        ))}
      </div>

    )
  }
}
export default Card;