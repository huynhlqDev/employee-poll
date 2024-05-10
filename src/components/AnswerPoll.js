import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { answerPoll } from '../actions/pollActions';
import PageNotFound from './PageNotFound';

const AnswerPoll = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading);
    const user = useSelector(state => state.auth.user);
    const polls = useSelector(state => state.poll.polls);

    const { id } = useParams();
    const [voted, setVoted] = useState(false);
    const [userVote, setUserVote] = useState(null);
    const [currentPoll, setCurrentPoll] = useState(null);
    const [optionPercentage, setOptionPercentage] = useState(null);

    useEffect(() => {

        const checkIsVoted = () => {
            if (currentPoll) {

                const votes1 = currentPoll.optionOne?.votes
                const votes2 = currentPoll.optionTwo?.votes

                for (let i = 0; i < votes1.length; i++) {
                    if (votes1[i] === user.id) {
                        setUserVote("option one")
                        setVoted(true)
                        break;
                    }
                }
                for (let i = 0; i < votes2.length; i++) {
                    if (votes2[i] === user.id) {
                        setUserVote("option two")
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
                if (optionOneVoteCount === 0 && optionTwoVoteCount === 0) {
                    return ({ percentageOptionOne: 50, percentageOptionTwo: 50 });
                }
                const percentageOptionOne = ((optionOneVoteCount / (optionOneVoteCount + optionTwoVoteCount)) * 100).toFixed(2);
                const percentageOptionTwo = ((optionTwoVoteCount / (optionOneVoteCount + optionTwoVoteCount)) * 100).toFixed(2);
                return ({ percentageOptionOne, percentageOptionTwo });
            } else {
                return null
            };
        };

        checkIsVoted();
        setOptionPercentage(calculatePercentage());

    }, [currentPoll, user, id]);

    useEffect(() => {
        setCurrentPoll(polls.find(user => user.id === id));
    }, [polls, user, id]);

    const handleAnswerPoll = (answer) => {
        if (!isLoading) {
            dispatch(answerPoll(user, currentPoll.id, answer));
        }
    };

    const paragraphStyleOptionOne = {
        width: optionPercentage?.percentageOptionOne + "%",
    };

    const paragraphStyleOptionTwo = {
        width: optionPercentage?.percentageOptionTwo + "%",
    };

    return (currentPoll ?
        <div className='create-poll-body'>
            <div className='polls-section'>
                <h3 className='polls-section-title'>Poll by {currentPoll?.author}</h3>
                {voted ?
                    <div className='poll-result'>
                        <div
                            className='option-one-area'
                            style={paragraphStyleOptionOne}
                        >{optionPercentage?.percentageOptionOne}%</div>
                        <div
                            className='option-two-area'
                            style={paragraphStyleOptionTwo}
                        >{optionPercentage?.percentageOptionTwo}%</div>
                    </div>
                    :
                    <img className='create-poll-logo'
                        src={user.avatarURL || "../create_poll.png"}
                        alt={"avatar"}
                    />
                }
                <p className='sub-title'>{voted ? `You have chosen: ${userVote}`: "Would You Rather"}</p>
                <div className='answer-poll'>
                    <div className='answer-poll-option'>
                        <p className='question-title'>{currentPoll?.optionOne?.text}</p>
                        <button
                            disabled={voted}
                            onClick={() => { handleAnswerPoll('optionOne') }}
                            className='vote-btn option-one-btn'
                        >{voted ? `votes: ${currentPoll?.optionOne?.votes?.length}` : "Click"}</button>
                    </div>
                    <div className='answer-poll-option'>
                        <p className='question-title'>{currentPoll?.optionTwo?.text}</p>
                        <button
                            disabled={voted}
                            onClick={() => { handleAnswerPoll('optionTwo') }}
                            className='vote-btn option-two-btn'
                        >{voted ? `votes: ${currentPoll?.optionTwo?.votes?.length}` : "Click"}</button>
                    </div>
                </div>
            </div>
        </div>
        :
        <PageNotFound />
    );
};

export default AnswerPoll;
