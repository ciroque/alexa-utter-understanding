"use strict";
const AlexaResponse_1 = require('../response/AlexaResponse');
const Logger_1 = require('../Logger');
class IntentRequestHandler {
    constructor() {
        this.logger = new Logger_1.Logger('IntentRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        return new Promise((resolve, reject) => {
            resolve(AlexaResponse_1.AlexaResponse.defaultInstance);
        });
    }
}
exports.IntentRequestHandler = IntentRequestHandler;
//# sourceMappingURL=IntentRequestHandler.js.map