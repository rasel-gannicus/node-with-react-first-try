import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';

function App() {
  // const [players, setPlayers] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/users')
  //     .then(res => res.json())
  //     .then(data => setPlayers(data))
  // }, [players]);

  // function handleSubmit(e){
  //   e.preventDefault();
  //   let name = e.target.name.value;
  //   let email = e.target.name.value;
  //   let user = {name, email};
  //   fetch('http://localhost:5000/user',{
  //     method : 'POST',
  //     headers : {'content-type' : 'application/json'},
  //     body : JSON.stringify(user)
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     let newUser = [...players, user];
  //     setPlayers(newUser);
  //   })
  // }
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/addUser' element={<AddUser></AddUser>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
