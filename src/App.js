import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[user, setUser] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:2100/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])

  function handleSubmit(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name, email};
    fetch('http://localhost:2100/user',{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      let newUsers = [...user,data];
      setUser(newUsers);
    })
  }
  return (
    <div className="App">
      <h2>User Found : {user.length} </h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='Your email' id="" />
        <input type="text" name="name" id="" />
        <button type="submit">Submit</button>
      </form>
      {
        user.map(index=><h2>{index.name}</h2>)
      }
    </div>
  );
}

export default App;
