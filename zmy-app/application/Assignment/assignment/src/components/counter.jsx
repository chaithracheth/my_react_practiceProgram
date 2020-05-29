import React, { Component } from "react";

class counter extends Component {
  formatCount()
{
  const {value}=this.props.counter;
  return value===0 ? "zero" : value;
}  
render() {
  return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>

    <button onClick={()=> this.props.onIncrement(this.props.counter.i)} 
    className="btn btn-waring btn-2sm">Increment</button>

    <button onClick={() => this.props.onDelete(this.props.counter.id)} 
    className="btn btn-danger btn-2sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }
}



export default counter;
