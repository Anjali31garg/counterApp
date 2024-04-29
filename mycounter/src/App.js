import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const[initial, setInitial] = useState(0);

  const inc = () =>{
    setInitial((prev)=> prev+1);
  }

  const dec = () =>{
    setInitial((prev)=> prev-1);
  }

  return (
    <div className="App">
    <h1>Counter App</h1>
    <p>{`Count: ${initial}`}</p>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;
