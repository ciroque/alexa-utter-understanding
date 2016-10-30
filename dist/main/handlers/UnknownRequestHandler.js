"use strict";
const AlexaResponse_1 = require('../response/AlexaResponse');
const SpeechletResponse_1 = require('../response/SpeechletResponse');
const SpeechletCard_1 = require('../response/SpeechletCard');
const SpeechletReprompt_1 = require('../response/SpeechletReprompt');
const SpeechletOutputSpeech_1 = require('../response/SpeechletOutputSpeech');
const Logger_1 = require('../Logger');
class UnknownRequestHandler {
    constructor() {
        this.logger = new Logger_1.Logger('UnknownRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        return new Promise((resolve) => {
            let card = new SpeechletCard_1.SpeechletCard('Unknown Request', UnknownRequestHandler.didNotUnderstandText, 'Simple');
            let outputSpeech = new SpeechletOutputSpeech_1.SpeechletOutputSpeech(UnknownRequestHandler.didNotUnderstandText, 'PlainText');
            let repromptSpeech = new SpeechletOutputSpeech_1.SpeechletOutputSpeech('Available actions include...', 'PlainText');
            let reprompt = new SpeechletReprompt_1.SpeechletReprompt(repromptSpeech);
            let speechletResponse = new SpeechletResponse_1.SpeechletResponse(outputSpeech, card, reprompt, true);
            let alexaResponse = new AlexaResponse_1.AlexaResponse(speechletResponse, {});
            resolve(alexaResponse);
        });
    }
}
UnknownRequestHandler.didNotUnderstandText = 'I did not understand the request.';
exports.UnknownRequestHandler = UnknownRequestHandler;
//# sourceMappingURL=UnknownRequestHandler.js.map