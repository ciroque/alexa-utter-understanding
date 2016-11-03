"use strict";
const Logger_1 = require('../../Logger');
class NullRequestHandler {
    constructor() {
        this.logger = new Logger_1.Logger('NullRequestHandler');
    }
    handleRequest(event, context) {
        this.logger.debug('handling request');
        return new Promise((resolve) => { resolve({}); });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NullRequestHandler;
//# sourceMappingURL=NullRequestHandler.js.map