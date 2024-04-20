import React from 'react';

const Leaderboard = () => {
    // Logic để tính xếp hạng từ dữ liệu trạng thái
    const leaderboardData = [];

    return (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {leaderboardData.map((employee, index) => (
                    <li key={index}>{employee.name}: {employee.points}</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
