export const answerPoll = (pollId, answer) => {
    return {
        type: 'ANSWER_POLL',
        payload: { pollId, answer }
    };
};
