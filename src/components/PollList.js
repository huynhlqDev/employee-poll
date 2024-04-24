import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPolls } from '../actions/pollActions';
import { _getQuestions } from '../data/_DATA';
import PollCard from './PollCard';

const PollList = () => {
    const dispatch = useDispatch();
    const polls = useSelector(state => state.poll.polls);
    const userInfo = useSelector(state => state.auth.loginInfo);

    const answerIdArray = Object.keys(userInfo.answers);

    useEffect(() => {
        _getQuestions().then(questions => {
            dispatch(getPolls(questions));
        })
    }, [dispatch]);

    return (
        <div className='polls'>
            <div className='polls-section'>
                <h3 className='polls-section-title'>New Questions</h3>
                <div className='polls-section-body'>
                    {polls.filter(poll => !answerIdArray.includes(poll.id))
                    .map(poll => (
                        <PollCard key={poll.id} poll={poll} />
                    ))}
                </div>
            </div>
            <div className='polls-section'>
                <h3 className='polls-section-title'>Done</h3>
                <div className='polls-section-body'>
                    {polls.filter(poll => answerIdArray.includes(poll.id))
                    .map(poll => (
                        <PollCard key={poll.id} poll={poll} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PollList;
