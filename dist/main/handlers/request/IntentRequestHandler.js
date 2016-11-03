"use strict";
const UnknownIntentHandler_1 = require('../intent/UnknownIntentHandler');
const RequestHandler_1 = require('./RequestHandler');
class IntentRequestHandler extends RequestHandler_1.RequestHandler {
    constructor(unknownIntentHandler) {
        super('IntentRequestHandler');
        this.intentHandlers = [];
        this.defaultHandler = unknownIntentHandler || new UnknownIntentHandler_1.UnknownIntentHandler();
    }
    handleRequest(event, context) {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        let handler = this.intentHandlers[event.request.intent.name] || this.defaultHandler;
        return handler.handleIntent(event, context);
    }
    registerIntentHandler(name, handler) {
        this.logger.debug(`Registering Intent handler for '${name}'.`);
        this.intentHandlers[name] = handler;
    }
    handlerRegistered(name, handler) {
        return this.intentHandlers[name] === handler;
    }
}
exports.IntentRequestHandler = IntentRequestHandler;
//# sourceMappingURL=IntentRequestHandler.js.map