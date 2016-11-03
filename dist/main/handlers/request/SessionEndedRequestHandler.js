"use strict";
const AlexaResponse_1 = require('../../response/AlexaResponse');
const RequestHandler_1 = require('./RequestHandler');
class SessionEndedRequestHandler extends RequestHandler_1.RequestHandler {
    constructor() {
        super('SessionEndedRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug('Ending Session');
        return new Promise((resolve) => {
            resolve(AlexaResponse_1.AlexaResponse.defaultInstance);
        });
    }
}
exports.SessionEndedRequestHandler = SessionEndedRequestHandler;
//# sourceMappingURL=SessionEndedRequestHandler.js.map