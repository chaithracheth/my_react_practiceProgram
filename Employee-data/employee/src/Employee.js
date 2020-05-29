import React from 'react';
import './App.css';
import LeftContainer from './components/Container/LeftContainer';
import RightContainer from './components/Container/RightContainer';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        employee: [],
       
      }
    }
    this.removeEmploye = this.removeEmploye.bind(this);
    this.userAdd = this.userAdd.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }

  userAdd(name, Dob, number) {
    const myBoolean=true;
    const employeeCopy = this.state.employee;
    employeeCopy.unshift({ 'name': name, 'Dob': Dob, 'number': number });
    this.setState({
      employee: employeeCopy,
    })
  }
  removeEmploye(index) {
    const employeeRemoveCopy = this.state.employee;
    employeeRemoveCopy.splice(index, 1);
    this.setState(
      {
        employee: employeeRemoveCopy
      })
  }

  addNewUser() {
    
    const name = document.getElementById("userName").value;
    const Dob = document.getElementById("userDob").value;
    const number = document.getElementById("userNumber").value;
    this.userAdd(name, Dob, number)
  }
  
  render() {
    return (
      <div className="mainContiner">
        <div className="Employee-header">Employee Details</div>
        <div className="downContiner">
            <LeftContainer  addNewUser={this.addNewUser}  myBoolean={this.myBoolean}/>
            <RightContainer employeeList={this.state.employee}  removeUser={this.removeEmploye} />
         </div>
      </div>
    )
  }
}
export default Employee;
