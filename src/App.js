import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Children from './components/Children'

function App() {
  let count = useSelector(state => state.count)
  let dispatch = useDispatch()

  const increaseNum = () => {
    dispatch({
      type:'increment',
    })
  }

  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <h2 style={{color: count >= 10 ? 'red' : 'black'}}>{count}</h2>
      <button onClick={() => increaseNum()}>Increment</button>
      <button onClick={() => dispatch({type:'decrement', payload: 1})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <Children />
    </div>
  );
}

export default App;
