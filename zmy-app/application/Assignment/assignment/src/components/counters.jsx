import React, { Component } from 'react'
import Counter from '../../src/components/counter'


export default class counters extends Component {
    
    render() {
        
        return (
            <div>
                <button onClick={this.props.onReset}
                 className="btn btn-primary m-2 btn-sm" >Reset</button>
               {this.props.counters.map(counter => 
               <Counter key={counter.id}  
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                counter={counter}>
                  
               </Counter>
               )}
            </div>
        )
    }
}
