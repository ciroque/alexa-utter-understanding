"use strict";
const AlexaResponse_1 = require('../../response/AlexaResponse');
const Logger_1 = require('../../Logger');
class SessionEndedRequestHandler {
    constructor() {
        this.logger = new Logger_1.Logger('SessionEndedRequestHandler');
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