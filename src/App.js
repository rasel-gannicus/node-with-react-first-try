import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[players, setPlayers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3200/user')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[players])
  return (
    <div className="App">
      <h2>User Found : {players.length} </h2>
    </div>
  );
}

export default App;
