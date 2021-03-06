"use strict";
const OutputSpeech_1 = require('./speech/OutputSpeech');
const Card_1 = require('./speech/Card');
const Reprompt_1 = require('./speech/Reprompt');
class SpeechletResponse {
    constructor(outputSpeech, card, reprompt, shouldEndSession) {
        this.outputSpeech = outputSpeech;
        this.card = card;
        this.reprompt = reprompt;
        this.shouldEndSession = shouldEndSession;
    }
    static get defaultInstance() {
        let outputSpeech = OutputSpeech_1.OutputSpeech.defaultInstance;
        let card = Card_1.Card.defaultInstance;
        let reprompt = Reprompt_1.Reprompt.defaultInstance;
        return new SpeechletResponse(outputSpeech, card, reprompt, true);
    }
}
exports.SpeechletResponse = SpeechletResponse;
//# sourceMappingURL=SpeechletResponse.js.map