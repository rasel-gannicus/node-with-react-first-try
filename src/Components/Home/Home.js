import React, { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
    return (
        <div>
            <h2>User Found : {users.length} </h2>
            
            
        </div>
    );
};

export default Home;