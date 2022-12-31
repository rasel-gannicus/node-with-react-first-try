import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';

function App() {
  
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
