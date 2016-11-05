"use strict";
const SpeechletResponseEnvelope_1 = require('../SpeechletResponseEnvelope');
const SpeechletResponse_1 = require('../SpeechletResponse');
const OutputSpeech_1 = require('../speech/OutputSpeech');
const Card_1 = require('../speech/Card');
class UnknownRequestResponse {
    static getInstance(sessionAttributes, shouldEndSession) {
        let outputSpeech = new OutputSpeech_1.OutputSpeech(this.outputText, OutputSpeech_1.OutputSpeech.PLAINTEXT);
        let card = new Card_1.Card('Unknown Request ', this.outputText, Card_1.Card.SIMPLE);
        let speechletResponse = new SpeechletResponse_1.SpeechletResponse(outputSpeech, card, null, shouldEndSession);
        return new SpeechletResponseEnvelope_1.SpeechletResponseEnvelope(speechletResponse, sessionAttributes);
    }
}
UnknownRequestResponse.outputText = 'I did not understand the request.';
exports.UnknownRequestResponse = UnknownRequestResponse;
//# sourceMappingURL=UnknownRequestResponse.js.map