import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3200/user')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [players])

  function handleSubmit(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let user = { name, email };

    fetch('http://localhost:3200/user', {
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        const newUser = [...players, data];
        setPlayers(newUser);
      })
  }
  return (
    <div className="App">
      <h2>User Found : {players.length} </h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" id="" />
        <input type="text" name="name" id="" />
        <button type="submit">Submit</button>
      </form>
      {
        players.map(index=> <h2 index={index}>{index.name}</h2> )
      }
    </div>
  );
}

export default App;
