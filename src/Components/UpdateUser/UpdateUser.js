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
    },[users]);

    function handleUpdate(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};

        // send data to the server
        fetch('http://localhost:5000/user',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success', data);
            alert('user added successfully');
        })
    }
    return (
        <div>
            <h2>Update User</h2>
            <form action="" onSubmit={handleUpdate} >
                <input type="email" name="email" id="" /> <br />
                <input type="text" name="name" id="" /> <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;