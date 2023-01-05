import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateSecondUser = () => {
    const {id} = useParams();
    const[users, setUsers] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h2> User found  for : {id} </h2>
            <h1>Name : {users.name} </h1>
            <p>Email : {users.email} </p>
        </div>
    );
};

export default UpdateSecondUser;