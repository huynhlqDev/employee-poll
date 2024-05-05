import {
    _saveQuestion,
    _saveQuestionAnswer
} from "../data/_DATA";

// Test: _saveQuestion function
describe("_saveQuestion", () => {

    const rejectResponse = "Please provide optionOneText, optionTwoText, and author";

    // Matches when correctly formatted data is passed
    it("Matches when correctly formatted data is passed", async () => {
        const question = {
            optionOneText: "optionOneText",
            optionTwoText: "optionTwoText",
            author: "author123"
        };

        var formattedQuestion = await _saveQuestion(question);
        expect(formattedQuestion.author).toEqual(question.author);
        expect(formattedQuestion.optionOne.text).toEqual(question.optionOneText);
        expect(formattedQuestion.optionTwo.text).toEqual(question.optionTwoText);
    });

    // Work correctly when invalid optionOneText
    it("Matches when the optionOneText variable is NOT formatted correctly", async () => {
        const question = {
            optionOneText: "",
            optionTwoText: "optionTwoText",
            author: "author123"
        };

        await expect(_saveQuestion(question)).rejects.toEqual(rejectResponse);
    });

    // Work correctly when invalid optionTwoText
    it("Matches when the optionOneText variable is NOT formatted correctly", async () => {
        const question = {
            optionOneText: "optionOneText",
            optionTwoText: "",
            author: "author123"
        };

        await expect(_saveQuestion(question)).rejects.toEqual(rejectResponse);
    });

    // Work correctly when invalid author
    it("Matches when the optionOneText variable is NOT formatted correctly", async () => {
        const question = {
            optionOneText: "optionOneText",
            optionTwoText: "optionTwoText",
            author: ""
        };

        await expect(_saveQuestion(question)).rejects.toEqual(rejectResponse);
    });

});


// Test: _saveQuestionAnswer function
describe("_saveQuestionAnswer", () => {

    const rejectResponse = "Please provide authedUser, qid, and answer";

    // Matches when correctly formatted data is passed
    it("Matches when correctly formatted data is passed", async () => {
        var authedUser = "sarahedo";
        var qid = "loxhs1bqm25b708cmbf3g";
        var answer = "optionTwo";
        var actualResult = await _saveQuestionAnswer({ authedUser, qid, answer });
        expect(actualResult).toEqual(true);
    });

    // Work correctly when missed authedUser
    it("Matches when missed authedUser", async () => {
        var qid = "am8ehyc8byjqgar0jgpub9";
        var answer = "answerOne";
        await expect(_saveQuestionAnswer({ qid, answer })).rejects.toEqual(rejectResponse);
    });

    // Work correctly when missed qid
    it("Matches when missed authedUser", async () => {
        var authedUser = "huynhlq";
        var answer = "answerOne";
        await expect(_saveQuestionAnswer({ authedUser, answer })).rejects.toEqual(rejectResponse);
    });

    // Work correctly when missed answer
    it("Matches when missed authedUser", async () => {
        var authedUser = "huynhlq";
        var qid = "am8ehyc8byjqgar0jgpub9";
        await expect(_saveQuestionAnswer({ authedUser, qid })).rejects.toEqual(rejectResponse);
    });

});
