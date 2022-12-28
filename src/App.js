import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[user, setUser] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])
  return (
    <div className="App">
      <h2>User Found : {user.length} </h2>
    </div>
  );
}

export default App;
