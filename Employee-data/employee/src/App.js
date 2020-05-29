
import React, { Component } from 'react';

class App extends Component
{
    render()
    {
        return(
            <div className="employeeWrapper">
          <div className="user-Enter-data">
         <span className="userInformation">Name:-</span><input id="userName" placeholder="Enter your name" className="box-Wrapper"/><br /><br />
         <span className="userInformation">Dob:-</span><input type="date" id="userDob"  className="box-Wrapper"/><br /><br />
         <span className="userInformation">Phone:-</span><input id="userNumber" r className="box-Wrapper" placeholder="Enter 10 digit pohone number"/><br /><br />
        <div className="addButtton">
        <button   className="addButton-style" onClick={() => {
        const name = document.getElementById("userName").value;
            const Dob = document.getElementById("userDob").value;
            const number = document.getElementById("userNumber").value;
            const numberValid= this.validatePhoneNumber(number);
            console.log(name);
            console.log(Dob);
            console.log(number);
            if(numberValid===true)
            {
              this.userAdd(name, Dob, number)
            }
            else{
              alert("enter valid phone number")
            }
          }}>ADD</button>
          </div>
        </div>
         </div>


        )
        
            
        
    }
}

export default App;