"use strict";
const RequestHandler_1 = require('./RequestHandler');
class LaunchRequestHandler extends RequestHandler_1.RequestHandler {
    constructor() {
        super('LaunchRequestHandler');
    }
    handleRequest(event, context) {
        return new Promise((resolve, reject) => {
            reject('Not Implemented');
        });
    }
}
exports.LaunchRequestHandler = LaunchRequestHandler;
//# sourceMappingURL=LaunchRequestHandler.js.map