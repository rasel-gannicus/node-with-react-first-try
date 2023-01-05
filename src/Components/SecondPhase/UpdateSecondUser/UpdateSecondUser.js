import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateSecondUser = () => {
    const {id} = useParams();
    const[users, setUsers] = useState([]);
    const [dummy, setDummy] = useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[users, dummy]);

    function handleSubmit(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};
        
        fetch(`http://localhost:5000/user/${id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)            
        })
        .then(res=>res.json())
        .then(data=>{
            alert('user updated successfully');
            setDummy('sdfs');
        })
    }
    return (
        <div>
            <h2> User found  for : {id} </h2>
            <h1>Name : {users.name} </h1>
            <p>Email : {users.email} </p>

            <h2>Update User : </h2>
            <form action=""  onSubmit={handleSubmit}>
                <input type="email" name="email" id="" /> <br />
                <input type="text" name="name" id="" /> <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateSecondUser;