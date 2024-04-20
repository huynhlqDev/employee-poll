import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { answerPoll } from '../actions/answerActions';

const AnswerPoll = ({ pollId }) => {
    const [answer, setAnswer] = useState('');
    const dispatch = useDispatch();

    const handleAnswerPoll = () => {
        dispatch(answerPoll(pollId, answer));
        setAnswer('');
    };

    return (
        <div>
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            <button onClick={handleAnswerPoll}>Submit Answer</button>
        </div>
    );
};

export default AnswerPoll;
