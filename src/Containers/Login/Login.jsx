
import React from 'react';
import Button from '../../Components/Button/Button';
import './Login.css';

const Login = () => {


    return(
        <div className='designLogin'>
            soy Login
            <Button destino={"Home"} url={"/"}/>
        </div>
    )
};

export default Login;