import React from 'react';
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const history=useNavigate();
    return (
        <div>
            <h1>Invalid Page</h1>
            <Button onClick={()=>{
                history("/");

            }}>Redirect To Login Page</Button>
        </div>
    );
};

export default Error;