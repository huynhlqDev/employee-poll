
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { createPoll, clearState } from '../actions/createPollActions';
import { Navigate } from 'react-router-dom';


const CreatePoll = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.user.id);
    const createPollStatus = useSelector(state => state.createPoll);

    const [isDisabledSubmit, setIsDisabledSubmit] = useState(true)
    const [questionInfo, setQuestionInfo] = useState({ optionOneText: "", optionTwoText: "" });
    const [finish, setFinish] = useState(false);

    useEffect(() => {

        if (createPollStatus.status) {
            window.alert("Create success!")
            setFinish(true);
            const clearData = () => {
                dispatch(clearState())
            }
            return clearData
        } else if (createPollStatus.error) {
            console.log("create failed, error: ", createPollStatus.error);
        }

    }, [createPollStatus, dispatch])

    useEffect(() => {
        setIsDisabledSubmit(
            questionInfo.optionOneText === "" || questionInfo.optionTwoText === ""
        )
    }, [questionInfo])

    const handleOptionOneChange = (e) => {
        setQuestionInfo({
            ...questionInfo,
            optionOneText: e.target.value
        });
    };

    const handleOptionTwoChange = (e) => {
        setQuestionInfo({
            ...questionInfo,
            optionTwoText: e.target.value
        });
    };

    const handleCreatePoll = () => {
        dispatch(createPoll(userId, questionInfo.optionOneText, questionInfo.optionTwoText));
    };

    return (finish ? <Navigate to="/poll-list" /> :
        <div className='create-poll-body'>
            <div className='polls-section '>
                <h3 className='polls-section-title'>Would You Rather</h3>
                <p className='sub-title'>Create Your Own Poll</p>
                <img className='create-poll-logo'
                    src="./create_poll.png"
                    alt={"logo"}
                />
                <div className='create-form'>
                    <div className="" id="optionOne">
                        <p className='sub-title'>First Option</p>
                        <input
                            type="text"
                            placeholder="Option one"
                            onChange={handleOptionOneChange}
                            className="create-form-control"
                        />
                    </div>
                    <div className="" id="optionTwo">
                        <p className='sub-title'>Second Option</p>
                        <input
                            type="text"
                            placeholder="Option two"
                            onChange={handleOptionTwoChange}
                            className="create-form-control"
                        />
                    </div>
                    <button disabled={isDisabledSubmit} onClick={handleCreatePoll} className='create-form-btn'>Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePoll;
