
const PollCard = ({ poll }) => {
    
    const convertTimestampToDateTime = (timestamp) => {
        const dateObject = new Date(timestamp);
        const dateTimeString = dateObject.toLocaleString(); 
        return dateTimeString;
    }

    return (
        <div className='poll-card'>
            <h5 className='poll-card-title'>{poll.author}</h5>
            <label className='poll-card-time'>{convertTimestampToDateTime(poll.timestamp)}</label>
            <button className='poll-card-btn'>Show</button>
        </div>
    );
}

export default PollCard;