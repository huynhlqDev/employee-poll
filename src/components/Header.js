import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/authenActions';

const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const handleLogout = () => {
        dispatch(logout())
    }

    const handlerLoginBox = () => {
        console.log("open login box!");
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
        </header>
    )
}

export default Header;