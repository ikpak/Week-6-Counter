import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Children from './components/Children'

function App() {
  let state = useSelector(state => state)

  let dispatch = useDispatch()

  const increaseNum = () => {
    dispatch({
      type:'increment',
    })
  }

  const renderBox = () => {
    return state.boxList.map((item, idx) => <Children id={idx+1} />)
  }

  return (
    <div className="App">
      <div>
        <h1>Redux Counter App</h1>
        <h2 style={{color: state.color}}>{state.count}</h2>
        <button onClick={() => increaseNum()}>+</button>
        <button className="resetBtn" onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type:'decrement', payload: 1})}>-</button>
        <form className="form">
          <div className="inputLabel">
            <label>Change Box Color:</label>
          </div>
          <input type="text" placeholder="Enter color name" onChange={(e) => dispatch({type: 'changeBgColor', payload: e.target.value})} />
        </form>

        {renderBox()}
      </div>
    </div>
  );
}

export default App;
