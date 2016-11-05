"use strict";
const SpeechletResponseEnvelope_1 = require('../SpeechletResponseEnvelope');
const SpeechletResponse_1 = require('../SpeechletResponse');
const OutputSpeech_1 = require('../speech/OutputSpeech');
const Card_1 = require('../speech/Card');
class UnknownIntentResponse {
    static getInstance(sessionAttributes, shouldEndSession) {
        let outputSpeech = new OutputSpeech_1.OutputSpeech(this.outputText, OutputSpeech_1.OutputSpeech.PLAINTEXT);
        let card = new Card_1.Card('Unknown Intent', this.outputText, Card_1.Card.SIMPLE);
        let speechletResponse = new SpeechletResponse_1.SpeechletResponse(outputSpeech, card, null, shouldEndSession);
        return new SpeechletResponseEnvelope_1.SpeechletResponseEnvelope(speechletResponse, sessionAttributes);
    }
}
UnknownIntentResponse.outputText = 'I did not understand the intent.';
exports.UnknownIntentResponse = UnknownIntentResponse;
//# sourceMappingURL=UnknownIntentResponse.js.map