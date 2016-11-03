"use strict";
const SpeechletOutputSpeech_1 = require('./SpeechletOutputSpeech');
const SpeechletCard_1 = require('./SpeechletCard');
const SpeechletReprompt_1 = require('./SpeechletReprompt');
class SpeechletResponse {
    constructor(outputSpeech, card, reprompt, shouldEndSession) {
        this.outputSpeech = outputSpeech;
        this.card = card;
        this.reprompt = reprompt;
        this.shouldEndSession = shouldEndSession;
    }
    static get defaultInstance() {
        let outputSpeech = SpeechletOutputSpeech_1.SpeechletOutputSpeech.defaultInstance;
        let card = SpeechletCard_1.SpeechletCard.defaultInstance;
        let reprompt = SpeechletReprompt_1.SpeechletReprompt.defaultInstance;
        return new SpeechletResponse(outputSpeech, card, reprompt, true);
    }
}
exports.SpeechletResponse = SpeechletResponse;
//# sourceMappingURL=SpeechletResponse.js.map