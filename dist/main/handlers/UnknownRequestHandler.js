"use strict";
const AlexaResponse_1 = require('../response/AlexaResponse');
const SpeechletResponse_1 = require('../response/SpeechletResponse');
const SpeechletCard_1 = require('../response/SpeechletCard');
const SpeechletReprompt_1 = require('../response/SpeechletReprompt');
const SpeechletOutputSpeech_1 = require('../response/SpeechletOutputSpeech');
class UnknownRequestHandler {
    handleRequest(event, context) {
        return new Promise((resolve, reject) => {
            let card = new SpeechletCard_1.SpeechletCard('Unknown Request', UnknownRequestHandler.didNotUnderstandText);
            let outputSpeech = new SpeechletOutputSpeech_1.SpeechletOutputSpeech(UnknownRequestHandler.didNotUnderstandText);
            let repromptSpeech = new SpeechletOutputSpeech_1.SpeechletOutputSpeech('Available actions include...');
            let reprompt = new SpeechletReprompt_1.SpeechletReprompt(repromptSpeech);
            let speechletResponse = new SpeechletResponse_1.SpeechletResponse(outputSpeech, card, reprompt, true);
            let alexaResponse = new AlexaResponse_1.AlexaResponse(speechletResponse);
            resolve(alexaResponse);
        });
    }
}
UnknownRequestHandler.didNotUnderstandText = 'I did not understand the request.';
exports.UnknownRequestHandler = UnknownRequestHandler;
//# sourceMappingURL=UnknownRequestHandler.js.map