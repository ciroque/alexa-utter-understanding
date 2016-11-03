"use strict";
const RequestHandler_1 = require('./RequestHandler');
class NullRequestHandler extends RequestHandler_1.RequestHandler {
    constructor() {
        super('NullRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug('handling request');
        return new Promise((resolve) => { resolve({}); });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NullRequestHandler;
//# sourceMappingURL=NullRequestHandler.js.map