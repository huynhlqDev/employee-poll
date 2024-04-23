export const createPoll = (poll) => {
    return {
        type: 'CREATE_POLL',
        payload: poll
    };
};

export const getPolls = (polls) => {
    const payload = Object.values(polls).map(i => i)
    return {
        type: 'GET_POLLS',
        payload
    };
};
