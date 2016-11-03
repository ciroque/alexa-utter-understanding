"use strict";
const Logger_1 = require('../../Logger');
const UnknownIntentHandler_1 = require('../intent/UnknownIntentHandler');
class IntentRequestHandler {
    constructor(unknownIntentHandler) {
        this.intentHandlers = [];
        this.logger = new Logger_1.Logger('IntentRequestHandler');
        this.defaultHandler = unknownIntentHandler || new UnknownIntentHandler_1.UnknownIntentHandler();
    }
    handleRequest(event, context) {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        let handler = this.intentHandlers[event.request.intent.name] || this.defaultHandler;
        return handler.handleIntent(event, context);
    }
    registerIntentHandler(name, handler) {
        this.intentHandlers[name] = handler;
    }
    handlerRegistered(name, handler) {
        return this.intentHandlers[name] === handler;
    }
}
exports.IntentRequestHandler = IntentRequestHandler;
//# sourceMappingURL=IntentRequestHandler.js.map