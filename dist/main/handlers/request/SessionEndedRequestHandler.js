"use strict";
const SpeechletResponseEnvelope_1 = require('../../response/SpeechletResponseEnvelope');
const RequestHandler_1 = require('./RequestHandler');
class SessionEndedRequestHandler extends RequestHandler_1.RequestHandler {
    constructor() {
        super('SessionEndedRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug('Ending Session');
        return new Promise((resolve) => {
            resolve(SpeechletResponseEnvelope_1.SpeechletResponseEnvelope.defaultInstance);
        });
    }
}
exports.SessionEndedRequestHandler = SessionEndedRequestHandler;
//# sourceMappingURL=SessionEndedRequestHandler.js.map