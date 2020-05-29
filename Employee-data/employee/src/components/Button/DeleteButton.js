import React,{ Component } from 'react'
class DeleteButton extends Component{
    render()
    {
        return(
            <div>
                 <button className="deleteButton-Style" onClick={this.props.removeUser}>{this.props.text1}</button>
            </div>
        )
    }
}

export default DeleteButton;