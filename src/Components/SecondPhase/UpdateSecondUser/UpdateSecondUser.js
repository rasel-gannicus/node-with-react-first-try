import React from 'react';
import { useParams } from 'react-router';

const UpdateSecondUser = () => {
    const {id} = useParams();
    return (
        <div>
            <h2> User found  for : {id} </h2>
        </div>
    );
};

export default UpdateSecondUser;