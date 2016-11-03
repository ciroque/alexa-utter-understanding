"use strict";
const UnknownIntentResponse_1 = require('../../response/predefined/UnknownIntentResponse');
const IntentHandler_1 = require('./IntentHandler');
class UnknownIntentHandler extends IntentHandler_1.IntentHandler {
    constructor() {
        super('UnknownIntentHandler');
    }
    handleIntent(event, context) {
        this.logger.debug('handling unknown intent');
        return new Promise((resolve) => { resolve(UnknownIntentResponse_1.UnknownIntentResponse.getInstance({}, true)); });
    }
}
exports.UnknownIntentHandler = UnknownIntentHandler;
//# sourceMappingURL=UnknownIntentHandler.js.map