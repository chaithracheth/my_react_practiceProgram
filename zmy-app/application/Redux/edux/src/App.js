import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions/actionButton'


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged=useSelector(state => state.isLogged);
  const dispatch=useDispatch();
  
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
     {isLogged ? <h3>u can c</h3> :"Inavlid user"}
     
    </div>
  );
}

export default App;
