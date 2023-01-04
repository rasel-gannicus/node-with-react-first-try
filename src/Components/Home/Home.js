import React, { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);

  function deleteUser(id){
    const proceed = window.confirm('You sure you want to delete user ?');
    if(proceed){
      const url = `http://localhost:5000/user/${id}`;
      fetch(url,{
        method : 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
    }
  }
    return (
        <div>
            <h2>User Found : {users.length} </h2>
            {
              users.map(index=><h3 index={index} key={index._id}>{index.name}
                <button onClick={()=>deleteUser(index._id)}>Delete</button>
              </h3>)
            }
            
        </div>
    );
};

export default Home;