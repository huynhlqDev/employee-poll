
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
            return clearData
        } else if (createPollStatus.error) {
            console.log("create failed, error: ", createPollStatus.error);
        }

    }, [createPollStatus])

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

    const clearData = () => {
        dispatch(clearState())
    }

    return (finish ? <Navigate to="/poll-list" /> :
        <div className='login'>
            <h1>Would You Rather</h1>
            <p>Create Your Own Poll</p>
            <img className='login-logo'
                src="./login-logo-2.png"
                alt={"logo"}
            />
            <div className='login-form'>
                <div className="login-input" id="optionOne">
                    <p>First Option</p>
                    <input
                        type="text"
                        placeholder="Option one"
                        onChange={handleOptionOneChange}
                        className="form-control"
                    />
                </div>
                <div className="login-input" id="optionTwo">
                    <p>Second Option</p>
                    <input
                        type="text"
                        placeholder="Option two"
                        onChange={handleOptionTwoChange}
                        className="form-control"
                    />
                </div>
                <button disabled={isDisabledSubmit} onClick={handleCreatePoll} className='login-form-btn'>Submit</button>
            </div>
        </div>
    );
};

export default CreatePoll;
