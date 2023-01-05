import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SecondPhase = () => {
    const[users, setUsers] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/user`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsers(data));        
    },[])
    return (
        <div>
            <h2>Second Try starts here</h2>
            <Link to='/addUserSecond'>Add Users</Link>
            <h2>Total Users found till now : {users.length} </h2>
            {
                users.map(index=> <h2 index={index} key={index._id}> {index.name} </h2> )
            }
        </div>
    );
};

export default SecondPhase;