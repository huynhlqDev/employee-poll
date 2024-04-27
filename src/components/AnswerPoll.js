import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setLoading } from '../actions/loadingAction';

const AnswerPoll = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.loading.isLoading);
    const polls = useSelector(state => state.poll.polls);
    const [curentPoll, setCurentPoll] = useState(null);

    useEffect(() => {
        console.log("curentPoll: ", curentPoll);
    }, [curentPoll]);

    useEffect(() => {
        //Simulated fetch api for 0.5s
        dispatch((dispatch) => dispatch(setLoading(true)));
        setTimeout(() => {
            setCurentPoll(findPollById(id));
            dispatch((dispatch) => dispatch(setLoading(false)));
        }, 500)

    }, [])

    const findPollById = (id) => {
        return polls.find(user => user.id === id);
    };

    const handleAnswerPoll = () => {

    };

    return (!isLoading && curentPoll &&
        <div>
            <input type="text" value={""} onChange={() => { }} />
            <button onClick={handleAnswerPoll}>Submit Answer</button>
        </div>
    );
};

export default AnswerPoll;
