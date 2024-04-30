import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { answerPoll } from '../actions/pollActions';

const AnswerPoll = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading);
    const user = useSelector(state => state.auth.user);
    const polls = useSelector(state => state.poll.polls);

    const { id } = useParams();
    const [voted, setVoted] = useState(false);
    const [currentPoll, setCurrentPoll] = useState(null);
    const [optionPercentage, setOptionPercentage] = useState(null);

    useEffect(() => {
        checkIsVoted();
        setOptionPercentage(calculatePercentage());
    }, [currentPoll]);

    useEffect(() => {
        setCurrentPoll(polls.find(user => user.id === id));
    }, [polls, user]);

    const checkIsVoted = () => {
        if (currentPoll) {
            
            const votes1 = currentPoll.optionOne?.votes
            const votes2 = currentPoll.optionTwo?.votes

            for (let i = 0; i < votes1.length; i++) {
                if (votes1[i] === user.id) {
                    setVoted(true)
                    break;
                }
            }
            for (let i = 0; i < votes2.length; i++) {
                if (votes2[i] === user.id) {
                    setVoted(true)
                    break;
                }
            }
        }
    };

    const calculatePercentage = () => {
        if (currentPoll) {
            const optionOneVoteCount = currentPoll.optionOne?.votes?.length;
            const optionTwoVoteCount = currentPoll.optionTwo?.votes?.length;
            const percentageOptionOne = ((optionOneVoteCount / (optionOneVoteCount + optionTwoVoteCount)) * 100).toFixed(2);
            const percentageOptionTwo = ((optionTwoVoteCount / (optionOneVoteCount + optionTwoVoteCount)) * 100).toFixed(2);
            return ({ percentageOptionOne, percentageOptionTwo });
        } else {
            return null
        };
    };

    const handleAnswerPoll = (answer) => {
        if (!isLoading) {
            dispatch(answerPoll(user, currentPoll.id, answer));
        }
    };

    return (currentPoll &&
        <div>
            <h1>Poll by {currentPoll?.author}</h1>
            <img className='login-logo' src="./login-logo-2.png" alt="logo" />
            <label>Would You Rather</label>
            <div>
                <div>
                    <h5>answer 1: {currentPoll?.optionOne?.text}</h5>
                    {voted && <p>votes: {currentPoll?.optionOne?.votes?.length}</p>}
                    {voted && <p>Percent: {optionPercentage?.percentageOptionOne}%</p>}
                    <button disabled={voted} onClick={() => { handleAnswerPoll('optionOne') }}>Click</button>
                </div>
                <div>
                    <h5>answer 2: {currentPoll?.optionTwo?.text}</h5>
                    {voted && <p>votes: {currentPoll?.optionTwo?.votes?.length}</p>}
                    {voted && <p>Percent: {optionPercentage?.percentageOptionTwo}%</p>}
                    <button disabled={voted} onClick={() => { handleAnswerPoll('optionTwo') }}>Click</button>
                </div>
            </div>
        </div>
    );
};

export default AnswerPoll;
