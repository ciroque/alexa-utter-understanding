"use strict";
const RequestHandler_1 = require('./RequestHandler');
class DefaultRequestHandler extends RequestHandler_1.RequestHandler {
    constructor() {
        super('DefaultRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug('handling request');
        return new Promise((resolve) => { resolve({}); });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DefaultRequestHandler;
//# sourceMappingURL=DefaultRequestHandler.js.map