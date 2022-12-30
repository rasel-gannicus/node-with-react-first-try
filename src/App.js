import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [players]);

  function handleSubmit(e){
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.name.value;
    let user = {name, email};
    fetch('http://localhost:5000/user',{
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      let newUser = [...players, user];
      setPlayers(newUser);
    })
  }
  return (
    <div className="App">
      <h2>Users Found : {players.length} </h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" id="" />
        <input type="text" name="name" id="" />
        <button type="submit">Submit</button>
      </form>
      {
        players.map(index=> <h3 index = {index} key={index.id}>{index.name}</h3> )
      }
    </div>
  );
}

export default App;
