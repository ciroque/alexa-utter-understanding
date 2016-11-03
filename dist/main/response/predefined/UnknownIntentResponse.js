"use strict";
const AlexaResponse_1 = require('../AlexaResponse');
const SpeechletResponse_1 = require('../SpeechletResponse');
const SpeechletOutputSpeech_1 = require('../SpeechletOutputSpeech');
const SpeechletCard_1 = require('../SpeechletCard');
class UnknownIntentResponse {
    static getInstance(sessionAttributes, shouldEndSession) {
        let outputSpeech = new SpeechletOutputSpeech_1.SpeechletOutputSpeech(this.outputText, SpeechletOutputSpeech_1.SpeechletOutputSpeech.PLAINTEXT);
        let card = new SpeechletCard_1.SpeechletCard('Unknown Intent', this.outputText, SpeechletCard_1.SpeechletCard.SIMPLE);
        let speechletResponse = new SpeechletResponse_1.SpeechletResponse(outputSpeech, card, null, shouldEndSession);
        return new AlexaResponse_1.AlexaResponse(speechletResponse, sessionAttributes);
    }
}
UnknownIntentResponse.outputText = 'I did not understand the intent.';
exports.UnknownIntentResponse = UnknownIntentResponse;
//# sourceMappingURL=UnknownIntentResponse.js.map