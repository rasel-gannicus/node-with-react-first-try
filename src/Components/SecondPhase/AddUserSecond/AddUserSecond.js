import React from 'react';

const AddUserSecond = () => {
    function handleSubmit(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};
        
        fetch('http://localhost:5000/user',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('user added successfully');
        })
    }
    return (
        <div>
            <h2>Add User for 2nd time</h2>
            <form action=""  onSubmit={handleSubmit}>
                <input type="email" name="email" id="" /> <br />
                <input type="text" name="name" id="" /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserSecond;