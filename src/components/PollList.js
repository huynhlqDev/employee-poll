import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPolls } from '../actions/pollActions';

const PollList = () => {
    const dispatch = useDispatch();
    const polls = useSelector(state => state.poll.polls);
    const userInfo = useSelector(state => state.auth.loginInfo);
    console.log("user info: ", userInfo);

    useEffect(() => {
        dispatch(getPolls());
    }, [dispatch]);

    return (

        <div>
            <ul>
                {polls.map(poll => (
                    <li key={poll.id}>{poll.question}</li>
                ))}
            </ul>
        </div>
    );
};

export default PollList;
