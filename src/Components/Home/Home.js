import React, { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);

  function deleteUser(id){
    console.log(id);
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