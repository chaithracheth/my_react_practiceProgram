import React, { Component } from "react";
import Navbar from '../src/components/navbar';
import "./App.css";
import Counters from "../src/components/counters";

class App extends Component {
  state ={
    counters:[
        {id:0, value:6},
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0}
    ]

}
handleIncrement =(id)=>
{
const counters =[...this.state.counters];
//const index=counters.indexOf(id);
//counters[index]={...id};
counters[id].value++;
this.setState({counters});
console.log("incrment");
};
handleDelete =(counterId) =>
{
    const counters = this.state.counters.filter(c => c.id !==counterId);
    this.setState({counters});
}

handleReset=()=>
{
    const copy=this.state.counters;
    copy.map(copy => {
        copy.value=0;
        return copy;
    })
    this.setState({
        counters:copy,
    })
}
  render() {
    return (
          <div>
              <Navbar  totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
              <main className="Continer">
                <Counters 
                counters={this.state.counters}
                onReset={this.handleReset}
                          onIncrement={this.handleIncrement}
                          onDelete={this.handleDelete}
                />
              </main>
        </div>
      
    );
  }
}

export default App;
