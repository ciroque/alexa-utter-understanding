"use strict";
const RequestHandler_1 = require('./RequestHandler');
class DefaultLaunchRequestHandler extends RequestHandler_1.RequestHandler {
    constructor() {
        super('DefaultLaunchRequestHandler');
    }
    handleRequest(event, context) {
        return new Promise((resolve, reject) => {
            reject('Not Implemented');
        });
    }
}
exports.DefaultLaunchRequestHandler = DefaultLaunchRequestHandler;
//# sourceMappingURL=DefaultLaunchRequestHandler.js.map