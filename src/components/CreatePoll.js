import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPoll } from '../actions/pollActions';

const CreatePoll = () => {
    const [question, setQuestion] = useState('');
    const dispatch = useDispatch();

    const handleCreatePoll = () => {
        dispatch(createPoll({ id: Date.now(), question }));
        setQuestion('');
    };

    return (
        <div>
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
            <button onClick={handleCreatePoll}>Create Poll</button>
        </div>
    );
};

export default CreatePoll;
