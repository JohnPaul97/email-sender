import React, {useState} from 'react';
import axiosClient from '../axios/axios';
import apiPaths from './api';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChangeUsername = event => {
        const value = event.target.value;

        setUsername(value);
    }

    const handleOnChangePassword = event => {
        const value = event.target.value;

        setPassword(value);
    }

    const login = () => {
        axiosClient.post(apiPaths.login, {username: username, password: password}).then((res)=> {
            console.log(res);
        })
    }

    return (
        <div>
            <input type="text" onChange={handleOnChangeUsername} value={username}></input>
            <input type="password" onChange={handleOnChangePassword} value={password}></input>       
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;