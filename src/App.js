import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import PollList from './components/PollList';
import CreatePoll from './components/CreatePoll';
import AnswerPoll from './components/AnswerPoll';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';
import IndicatorLoading from './components/IndicatorLoading';
import PageNotFound from './components/PageNotFound';
import { _getRedirecPath, _saveRedirecPath } from './data/existingUsers';

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleBeforeLogin = () => {
    const currentPath = window.location.pathname;
    _saveRedirecPath(currentPath);
    if (currentPath.includes("/questions")) {
      _saveRedirecPath(currentPath);
    }
    return "/login";
  }

  const handleAfterLogin = () => {
    const redirecPath = _getRedirecPath();
    if (redirecPath !== "") {
      _saveRedirecPath("")
      return redirecPath;
    } else {
      return "/poll-list";
    }
  }

  return (
    <Router>
      <Header />
      <div>
        <IndicatorLoading />
        <Routes>
          <Route path="/" exact element={isLoggedIn ? <Navigate to="/poll-list" /> : <Login />}></Route>
          <Route path="/login" element={isLoggedIn ? <Navigate to={handleAfterLogin()} /> : <Login />}></Route>
          <Route path="/poll-list" element={isLoggedIn ? <PollList /> : <Navigate to="/login" />}></Route>
          <Route path="/add" element={isLoggedIn ? <CreatePoll /> : <Navigate to="/login" />}></Route>
          <Route path="/questions/:id" element={isLoggedIn ? <AnswerPoll /> : <Navigate to={handleBeforeLogin()} />}></Route>
          <Route path="/leaderboard" element={isLoggedIn ? <Leaderboard /> : <Navigate to='/login' />}></Route>
          <Route path="/PageNotFound" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
