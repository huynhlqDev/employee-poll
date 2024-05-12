import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPolls } from '../actions/pollActions';
import PollCard from './PollCard';
import IndicatorLoading from './IndicatorLoading';

const PollList = () => {
    const isLoading = useSelector(state => state.polls.loading);
    const dispatch = useDispatch();
    const polls = useSelector(state => state.polls.polls);
    const userInfo = useSelector(state => state.user.user);
    const answerIdArray = Object.keys(userInfo.answers);

    const [selectedButton, setSelectedButton] = useState('new');

    useEffect(() => {
        if (polls) {
            // console.log("poll list:", polls)
        }
    }, [polls]);

    useEffect(() => {
        dispatch(getPolls());
    }, [dispatch]);

    const softTimestampToNewest = (a, b) => {
        return b.timestamp - a.timestamp
    }

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (isLoading ? <IndicatorLoading /> :
        <div className='polls'>
            <div className='polls-section'>
                <div className="radio-button-container">
                    <button
                        className={`polls-section-title radio-button ${selectedButton === "new" ? "checked" : ""}`}
                        onClick={() => handleButtonClick('new')}
                    >
                        New
                    </button>
                    <button
                        className={`polls-section-title radio-button ${selectedButton === "done" ? "checked" : ""}`}
                        onClick={() => handleButtonClick('done')}
                    >
                        Done
                    </button>
                </div>
                {(selectedButton === "new") ?
                    <div className='polls-section-body'>
                        {polls
                            .filter(poll => !answerIdArray.includes(poll.id))
                            .sort(softTimestampToNewest)
                            .map(poll => (
                                <PollCard key={poll.id} poll={poll} />
                            ))
                        }
                    </div>
                    :
                    <div className='polls-section-body'>
                        {polls.filter(poll => answerIdArray.includes(poll.id))
                            .sort(softTimestampToNewest)
                            .map(poll => (
                                <PollCard key={poll.id} poll={poll} />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default PollList;
