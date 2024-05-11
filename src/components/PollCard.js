import { Link } from "react-router-dom";

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
            <Link className='poll-card-btn' to={`/questions/${poll.id}`}>Show</Link>
        </div>
    );
}

export default PollCard;