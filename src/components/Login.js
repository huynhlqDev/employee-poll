import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authenActions';

const Login = () => {

    const dispatch = useDispatch()
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true)
    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })

    useEffect(() => {
        setIsDisabledSubmit(
            loginInfo.username === "" || loginInfo.password === ""
        )
    },[loginInfo])

    const handleUsernameChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            username: e.target.value
        });
    };

    const handlePasswordChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            password: e.target.value
        });
    };

    const handleOnSubmit = () => {
        dispatch(login(loginInfo.username, loginInfo.password))
    }

    return (
        <div>
            <h1>Employee Polls</h1>
            <img className='login-logo'
                src="./login-logo.png"
                alt={"logo"}
            />
            <div>
                <div className="login-input" id="username">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={handleUsernameChange}
                        className="form-control"
                    />
                </div>
                <div className="login-input" id="password">
                    <input
                        type="text"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        className="form-control"
                    />
                </div>
                <button disabled={isDisabledSubmit} onClick={handleOnSubmit} className='form-submit-btn'>Submit</button>
            </div>
        </div>
    )
}

export default Login;