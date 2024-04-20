import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/authenActions';

const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const handleLogout = () => {
        dispatch(logout())
    }

    return ( isLoggedIn ?
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create-poll">Create Poll</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                </ul>
            </nav>
            <div className="logout-box">
                {isLoggedIn && <button onClick={(handleLogout)}>Logout</button>}
            </div>
        </header>
        : null
    )
}

export default Header;