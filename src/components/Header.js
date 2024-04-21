import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, logout } from '../actions/authenActions';
import { _getExistingUsers } from '../data/existingUsers';
import UserDropdown from './UserDropdown';
import { useEffect, useState } from 'react';

const Header = () => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const loginInfo = useSelector(state => state.auth.loginInfo);

    const [showUserDropdown, setShowUserDropdown] = useState(false)

    useEffect(() => {
        setShowUserDropdown(false)
    }, [isLoggedIn])

    const handleLogout = () => {
        dispatch(logout(loginInfo.id))
    }

    const handlerLoginBox = () => {
        setShowUserDropdown(!showUserDropdown)
    }

    const handleOnSelectUser = (user) => {
        setShowUserDropdown(false)
        dispatch(login(user.id, user.password))
    }

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo-app">
                    <Link to="/">
                        <img src="/polls-logo.png" alt="Logo" />
                    </Link>
                </div>
                {isLoggedIn && <nav className="nav">
                    <ul>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                        <li><Link to="/add">New</Link></li>
                    </ul>
                </nav>}
            </div>
            <div className='header-right'>
                {isLoggedIn &&
                    <div onClick={handleLogout}>
                        <img src="/logout-logo.png" alt="Logo" />
                    </div>}
                {!isLoggedIn &&
                    <div onClick={handlerLoginBox} className='login-box'>
                        <img src="/login-logo.png" alt="Logo" />
                    </div>
                }

            </div>
            {showUserDropdown &&
                <UserDropdown users={_getExistingUsers()} handleOnSelectUser={handleOnSelectUser} />}
        </header>
    )
}

export default Header;