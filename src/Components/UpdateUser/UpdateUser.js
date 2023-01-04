import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Update user : {id} </h2>
        </div>
    );
};

export default UpdateUser;