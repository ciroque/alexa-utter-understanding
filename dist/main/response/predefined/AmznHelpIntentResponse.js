"use strict";
const AlexaResponse_1 = require('../AlexaResponse');
const SpeechletResponse_1 = require('../SpeechletResponse');
const SpeechletOutputSpeech_1 = require('../SpeechletOutputSpeech');
const SpeechletCard_1 = require('../SpeechletCard');
const SpeechletReprompt_1 = require('../SpeechletReprompt');
class AmznHelpIntentResponse {
    static getInstance(sessionAttributes, shouldEndSession) {
        let outputSpeech = new SpeechletOutputSpeech_1.SpeechletOutputSpeech(this.helpText, SpeechletOutputSpeech_1.SpeechletOutputSpeech.PLAINTEXT);
        let repromptOutputSpeech = new SpeechletOutputSpeech_1.SpeechletOutputSpeech(this.rePromptText, SpeechletOutputSpeech_1.SpeechletOutputSpeech.PLAINTEXT);
        let card = new SpeechletCard_1.SpeechletCard('Help ', this.helpText, SpeechletCard_1.SpeechletCard.SIMPLE);
        let reprompt = new SpeechletReprompt_1.SpeechletReprompt(repromptOutputSpeech);
        let speechletResponse = new SpeechletResponse_1.SpeechletResponse(outputSpeech, card, reprompt, shouldEndSession);
        return new AlexaResponse_1.AlexaResponse(speechletResponse, sessionAttributes);
    }
}
AmznHelpIntentResponse.helpText = 'Your help text goes here';
AmznHelpIntentResponse.rePromptText = 'Use the things';
exports.AmznHelpIntentResponse = AmznHelpIntentResponse;
//# sourceMappingURL=AmznHelpIntentResponse.js.map