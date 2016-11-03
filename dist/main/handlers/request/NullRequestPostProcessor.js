"use strict";
const RequestPostProcessor_1 = require('./RequestPostProcessor');
class NullRequestPostProcessor extends RequestPostProcessor_1.RequestPostProcessor {
    constructor() {
        super('NullRequestPostProcessor');
    }
    handleRequest(event, context, response) {
        this.logger.debug('Returning the given response.');
        return new Promise((resolve) => { resolve(response); });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NullRequestPostProcessor;
//# sourceMappingURL=NullRequestPostProcessor.js.map