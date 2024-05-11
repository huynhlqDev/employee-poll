import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authenActions';
import IndicatorLoading from '../components/IndicatorLoading';

const Login = () => {
    const isLoading = useSelector(state => state.user.loading);

    const dispatch = useDispatch()
    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true)
    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    const errorLogin = useSelector(state => state.user.error)

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

    return (isLoading ? <IndicatorLoading />
        :
        <div className='login'>
            <div className='login-body'>
                <h1 className='login-title'>Employee Polls</h1>
                <img className='login-logo'
                    src="./auth-user.png"
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
                    <button disabled={isDisabledSubmit} onClick={handleOnSubmit} className='login-form-btn'>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Login;