import React from 'react';
import { Link } from 'react-router-dom';

const SecondPhase = () => {
    return (
        <div>
            <h2>Second Try starts here</h2>
            <Link to='/addUserSecond'>Add Users</Link>
        </div>
    );
};

export default SecondPhase;