import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Children from './components/Children'

function App() {
  let count = useSelector(state => state.count)
  let boxList = useSelector(state => state.boxList)
  let color = useSelector(state => state.color)

  let dispatch = useDispatch()

  const increaseNum = () => {
    dispatch({
      type:'increment',
    })
  }

  return (
    <div className="App">
      <div>
        <h1>Redux Counter App</h1>
        <h2 style={{color: color}}>{count}</h2>
        <button onClick={() => increaseNum()}>+</button>
        <button className="resetBtn" onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type:'decrement', payload: 1})}>-</button>
        <form className="form">
          <div className="inputLabel">
            <label>Change Box Color:</label>
          </div>
          <input type="text" id="backgroundColor" placeholder="Enter color name" />
        </form>

        {boxList && boxList.map(item => <Children />)}
      </div>
    </div>
  );
}

export default App;
