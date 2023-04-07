import logo from './logo.svg';
import './App.css';
import React, {  useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 }
    case 'dec':
      return { count: state.count - 1 }
  }

}

function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function inc() {
    dispatch({ type: 'inc' })
  }
  function dec() {
    dispatch({ type: 'dec' })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={dec}>-</button>
        <span>{state.count}</span>
        <button onClick={inc}>+</button>

      </header>
    </div>
  );
}

export default App;
