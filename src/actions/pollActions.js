export const createPoll = (poll) => {
    return {
        type: 'CREATE_POLL',
        payload: poll
    };
};

export const getPolls = () => {
    return {
        type: 'GET_POLLS'
    };
};
