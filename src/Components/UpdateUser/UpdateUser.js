import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[users])
    return (
        <div>
            <h2>Update user : {id} </h2>
            <h2>{users.name}</h2>
        </div>
    );
};

export default UpdateUser;