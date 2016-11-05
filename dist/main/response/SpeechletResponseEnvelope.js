"use strict";
const SpeechletResponse_1 = require('./SpeechletResponse');
const OutputSpeech_1 = require('./speech/OutputSpeech');
const LinkAccountCard_1 = require('./speech/LinkAccountCard');
class SpeechletResponseEnvelope {
    constructor(response, sessionAttributes) {
        this.response = response;
        this.version = '1.0';
        this.sessionAttributes = sessionAttributes;
    }
    static get defaultInstance() {
        let speechletResponse = SpeechletResponse_1.SpeechletResponse.defaultInstance;
        return new SpeechletResponseEnvelope(speechletResponse, {});
    }
    static get linkAccountInstance() {
        let card = new LinkAccountCard_1.LinkAccountCard();
        let outputSpeech = new OutputSpeech_1.OutputSpeech('Please go to your Alexa app and link your account.', OutputSpeech_1.OutputSpeech.PLAINTEXT);
        let response = new SpeechletResponse_1.SpeechletResponse(outputSpeech, card, null, null);
        delete card.content;
        delete card.title;
        delete response.reprompt;
        delete response.shouldEndSession;
        return new SpeechletResponseEnvelope(response, {});
    }
}
exports.SpeechletResponseEnvelope = SpeechletResponseEnvelope;
//# sourceMappingURL=SpeechletResponseEnvelope.js.map