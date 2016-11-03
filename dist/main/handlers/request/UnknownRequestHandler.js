"use strict";
const Logger_1 = require('../../Logger');
const UnknownRequestResponse_1 = require('../../response/predefined/UnknownRequestResponse');
class UnknownRequestHandler {
    constructor() {
        this.logger = new Logger_1.Logger('UnknownRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        return new Promise((resolve) => { resolve(UnknownRequestResponse_1.UnknownRequestResponse.getInstance({}, true)); });
    }
}
UnknownRequestHandler.didNotUnderstandText = 'I did not understand the request.';
exports.UnknownRequestHandler = UnknownRequestHandler;
//# sourceMappingURL=UnknownRequestHandler.js.map