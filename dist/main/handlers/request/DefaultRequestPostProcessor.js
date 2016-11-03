"use strict";
const RequestPostProcessor_1 = require('./RequestPostProcessor');
class DefaultRequestPostProcessor extends RequestPostProcessor_1.RequestPostProcessor {
    constructor() {
        super('DefaultRequestPostProcessor');
    }
    handleRequest(event, context, response) {
        this.logger.debug('Returning the given response.');
        return new Promise((resolve) => { resolve(response); });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DefaultRequestPostProcessor;
//# sourceMappingURL=DefaultRequestPostProcessor.js.map