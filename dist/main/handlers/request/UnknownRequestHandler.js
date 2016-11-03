"use strict";
const UnknownRequestResponse_1 = require('../../response/predefined/UnknownRequestResponse');
const RequestHandler_1 = require('./RequestHandler');
class UnknownRequestHandler extends RequestHandler_1.RequestHandler {
    constructor() {
        super('UnknownRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        return new Promise((resolve) => { resolve(UnknownRequestResponse_1.UnknownRequestResponse.getInstance({}, true)); });
    }
}
UnknownRequestHandler.didNotUnderstandText = 'I did not understand the request.';
exports.UnknownRequestHandler = UnknownRequestHandler;
//# sourceMappingURL=UnknownRequestHandler.js.map