import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
    render() {
        return (
            <div className="addButtton">

                <div>
                    <button className="addButton-style" onClick={this.props.addNewUser}>{this.props.text}</button></div>
                 </div>

        )
    }
}

export default Button;