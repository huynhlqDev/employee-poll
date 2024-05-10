import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/userActions';

const Leaderboard = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading);
    const userResponse = useSelector(state => state.users.users);

    const [leadersboard, setLeadersboard] = useState([]);

    useEffect(() => {
        if (userResponse) {
            setLeadersboard(convertUsersToLeaders(userResponse));
        }
    }, [userResponse]);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    const convertUsersToLeaders = (userResponse) => {
        return userResponse && userResponse
            .map(user => ({
                id: user.id,
                name: user.name,
                avatar: user.avatarURL,
                answersCount: Object.keys(user.answers).length,
                questionsCount: user.questions.length
            }))
            .sort((a, b) => {
                return b.answersCount - a.answersCount;
            })
    };


    return (!isLoading &&
        <div className='polls-section'>
            <h3 className='polls-section-title'>Leaderboard</h3>
            <table>
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {leadersboard.map(leader => (
                        <tr key={leader.id}>
                            <td>
                                <div className='leaderboard-card'>
                                    <img className='leaderboard-card-avatar'
                                        src={leader.avatar || "./auth-user.png"}
                                        alt={"avatar"}
                                    />
                                    <div style={{display: "flex", flexDirection: "column", marginLeft: "20px"}}>
                                        <p className='leaderboard-card-title'>{leader.name}</p>
                                        <p className='sub-title'>{leader.id}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{leader.answersCount}</td>
                            <td>{leader.questionsCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
