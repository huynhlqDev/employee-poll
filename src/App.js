import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import PollList from './components/PollList';
import CreatePoll from './components/CreatePoll';
import AnswerPoll from './components/AnswerPoll';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';
import IndicatorLoading from './components/IndicatorLoading';

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Router>
      <Header/>
      <div>
      <IndicatorLoading />
        <Routes>
          <Route path="/" exact element={isLoggedIn ? <Navigate to="/poll-list" /> : <Login />}></Route>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/poll-list" /> : <Login />}></Route>
          <Route path="/poll-list" element={isLoggedIn ? <PollList /> : <Navigate to="/login" />}></Route>
          <Route path="/add" element={isLoggedIn ? <CreatePoll /> : <Navigate to="/login" />}></Route>
          <Route path="/answer-poll/:id" element={isLoggedIn ? <AnswerPoll /> : <Navigate to="/login" />}></Route>
          <Route path="/leaderboard" element={isLoggedIn ? <Leaderboard /> : <Navigate to="/login" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
