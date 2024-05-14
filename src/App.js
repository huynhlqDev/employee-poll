import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import PollList from './components/PollList';
import CreatePoll from './components/CreatePoll';
import AnswerPoll from './components/AnswerPoll';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import ProtectedRoute from './components/RequireAuth';

function App() {

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <PollList />
            </ProtectedRoute>
          } />
          <Route path="/poll-list" element={
            <ProtectedRoute>
              <PollList />
            </ProtectedRoute>
          } />
          <Route path="/add" element={
            <ProtectedRoute>
              <CreatePoll />
            </ProtectedRoute>
          } />
          <Route path="/leaderboard" element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          } />
          <Route path="/questions/:id" element={
            <ProtectedRoute>
              <AnswerPoll />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
