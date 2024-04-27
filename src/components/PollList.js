import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPolls } from '../actions/pollActions';
import PollCard from './PollCard';

const PollList = () => {
    const dispatch = useDispatch();
    const polls = useSelector(state => state.poll.polls);
    const userInfo = useSelector(state => state.auth.loginInfo);

    const answerIdArray = Object.keys(userInfo.answers);

    useEffect(() => {
        console.log("poll list:", polls)
    }, [polls]);

    useEffect(() => {
        dispatch(getPolls());
    }, [dispatch]);

    const softTimestampToNewest = (a, b) => {
        return b.timestamp - a.timestamp
    }


    return (
        <div className='polls'>
            <div className='polls-section'>
                <h3 className='polls-section-title'>New Questions</h3>
                <div className='polls-section-body'>
                    {polls
                        .filter(poll => !answerIdArray.includes(poll.id))
                        .sort(softTimestampToNewest)
                        .map(poll => (
                            <PollCard key={poll.id} poll={poll} />
                        ))
                    }
                </div>
            </div>
            <div className='polls-section'>
                <h3 className='polls-section-title'>Done</h3>
                <div className='polls-section-body'>
                    {polls.filter(poll => answerIdArray.includes(poll.id))
                        .sort(softTimestampToNewest)
                        .map(poll => (
                            <PollCard key={poll.id} poll={poll} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PollList;
