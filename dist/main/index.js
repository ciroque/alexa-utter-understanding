"use strict";
const Logger_1 = require('./Logger');
const IntentRequestHandler_1 = require('./handlers/IntentRequestHandler');
const LaunchRequestHandler_1 = require('./handlers/LaunchRequestHandler');
const EndSessionRequestHandler_1 = require('./handlers/EndSessionRequestHandler');
const UnknownRequestHandler_1 = require('./handlers/UnknownRequestHandler');
class UtterUnderstanding {
    constructor() {
        this.ModuleName = 'UtterUnderstanding';
        this.logger = new Logger_1.Logger(this.ModuleName);
        this.handlers = {};
        this.logger = new Logger_1.Logger(this.ModuleName);
        this.handlers['IntentRequest'] = new IntentRequestHandler_1.IntentRequestHandler();
        this.handlers['LaunchRequest'] = new LaunchRequestHandler_1.LaunchRequestHandler();
        this.handlers['EndSessionRequest'] = new EndSessionRequestHandler_1.EndSessionRequestHandler();
        this.unknownRequestHandler = new UnknownRequestHandler_1.UnknownRequestHandler();
    }
    static handler(event, context) {
        return new UtterUnderstanding().handleRequest(event, context);
    }
    handleRequest(event, context) {
        let result;
        try {
            this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)}, __CONTEXT(${JSON.stringify(context)}))`);
            let handler = this.handlers[event.request.type] || this.unknownRequestHandler;
            result = handler.handleRequest(event, context);
        }
        catch (error) {
            this.logger.error(`${error}`);
            result = new Promise((_, reject) => { reject(error); });
        }
        return result;
    }
}
exports.UtterUnderstanding = UtterUnderstanding;
function handler(event, context) {
    UtterUnderstanding
        .handler(event, context)
        .then((response) => {
        context.succeed(response);
    })
        .catch((error) => {
        context.fail(error);
    });
}
exports.handler = handler;
//# sourceMappingURL=index.js.map