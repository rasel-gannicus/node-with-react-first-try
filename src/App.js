import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import Header from './Components/Header/Header';
import SecondPhase from './Components/SecondPhase/SecondPhase';

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
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/addUser' element={<AddUser></AddUser>} ></Route>
        <Route path='/updateUser/:id' element={<UpdateUser></UpdateUser>}></Route>
        <Route path='/secondTry' element={<SecondPhase></SecondPhase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
