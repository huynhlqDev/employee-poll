import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authenActions';

const Login = () => {
    const isLoading = useSelector(state => state.loading.isLoading);

    const dispatch = useDispatch()
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true)
    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    const errorLogin = useSelector(state => state.auth.error)

    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    useEffect(() => {
        // usernameInput.current.focus()
    }, [])

    useEffect(() => {
        if (errorLogin) {
            alert(errorLogin)
        }
    }, [errorLogin])

    useEffect(() => {
        setIsDisabledSubmit(
            loginInfo.username === "" || loginInfo.password === ""
        )
    }, [loginInfo])

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

    return (!isLoading &&
        <div className='login'>
            <h1>Employee Polls</h1>
            <img className='login-logo'
                src="./login-logo-2.png"
                alt={"logo"}
            />
            <div className='login-form'>
                <div className="login-input">
                    <input
                        id='username'
                        ref={usernameInput}
                        type="text"
                        placeholder="Username"
                        onChange={handleUsernameChange}
                        className="form-control"
                    />
                </div>
                <div className="login-input">
                    <input
                        id='password'
                        ref={passwordInput}
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        className="form-control"
                    />
                </div>
                <button disabled={isDisabledSubmit} onClick={handleOnSubmit} className='login-form-btn'>Submit</button>
            </div>
        </div>
    )
}

export default Login;