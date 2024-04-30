import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { answerPoll } from '../actions/pollActions';

const AnswerPoll = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user);
    const polls = useSelector(state => state.poll.polls);

    const { id } = useParams();
    const [currentPoll, setCurrentPoll] = useState(null);
    const [optionPercentage, setOptionPercentage] = useState(null);

    useEffect(() => {
        calculatePercentage()
        if (currentPoll) {
            console.log("1_votes: ", currentPoll.optionOne?.votes.length)
            console.log("2_votes: ", currentPoll.optionTwo?.votes.length)
        }
    }, [currentPoll])

    useEffect(() => {
        setCurrentPoll(polls.find(user => user.id === id))
    }, [polls, user]);

    const handleAnswerPoll = (answer) => {
        dispatch(answerPoll(user, currentPoll.id, answer));
    };


    const calculatePercentage = () => {
        if (currentPoll) {
            const optionOneVoteCount = currentPoll.optionOne?.votes?.length
            const optionTwoVoteCount = currentPoll.optionTwo?.votes?.length
            const percentageOptionOne = ((optionOneVoteCount / (optionOneVoteCount + optionTwoVoteCount)) * 100).toFixed(2);
            const percentageOptionTwo = ((optionTwoVoteCount / (optionOneVoteCount + optionTwoVoteCount)) * 100).toFixed(2);
            setOptionPercentage({
                percentageOptionOne,
                percentageOptionTwo
            })
        }
    }

    return ( currentPoll &&
        <div>
            <h1>Poll by {currentPoll?.author}</h1>
            <img className='login-logo' src="./login-logo-2.png" alt="logo" />
            <label>Would You Rather</label>
            <div>
                <div>
                    <h5>answer 1: {currentPoll?.optionOne?.text}</h5>
                    <p>votes: {currentPoll?.optionOne?.votes?.length}</p>
                    <p>Percent: {optionPercentage?.percentageOptionOne}%</p>
                    <button onClick={() => { handleAnswerPoll('optionOne') }}>Click</button>
                </div>
                <div>
                    <h5>answer 2: {currentPoll?.optionTwo?.text}</h5>
                    <p>votes: {currentPoll?.optionTwo?.votes?.length}</p>
                    <p>Percent: {optionPercentage?.percentageOptionTwo}%</p>
                    <button onClick={() => { handleAnswerPoll('optionTwo') }}>Click</button>
                </div>
            </div>
        </div>
    );
};

export default AnswerPoll;
