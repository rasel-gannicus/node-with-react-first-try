import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SecondPhase = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/user`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    function deleteUser(id) {
        const proceed = window.confirm('Are you sure to delete ? ');
        if (proceed) {
            let url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0 ){
                    let remaining = users.filter(index=>index._id != id);
                    setUsers(remaining);
                }
            })
        }
    }
    
    const navigate = useNavigate();
    function updateUser(id){
        const url = `/secondUser/${id}`;
        navigate(url);
    }
    return (
        <div>
            <h2>Second Try starts here</h2>
            <Link to='/addUserSecond'>Add Users</Link>
            <h2>Total Users found till now : {users.length} </h2>
            {
                users.map(index => <h2 index={index} key={index._id}> {index.name}
                    <button onClick={()=>updateUser(index._id)}>Update User</button>
                    <button onClick={() => deleteUser(index._id)}>Delete</button>
                </h2>)
            }
        </div>
    );
};

export default SecondPhase;