"use strict";
const NullRequestPostProcessor_1 = require('./handlers/request/NullRequestPostProcessor');
const NullRequestHandler_1 = require('./handlers/request/NullRequestHandler');
const UnknownRequestHandler_1 = require('./handlers/request/UnknownRequestHandler');
const SessionEndedRequestHandler_1 = require('./handlers/request/SessionEndedRequestHandler');
const RequestNames_1 = require('./handlers/request/RequestNames');
const LaunchRequestHandler_1 = require('./handlers/request/LaunchRequestHandler');
const IntentRequestHandler_1 = require('./handlers/request/IntentRequestHandler');
const Logger_1 = require('./Logger');
class UtterUnderstanding {
    constructor() {
        this.ModuleName = 'UtterUnderstanding';
        this.logger = new Logger_1.Logger(this.ModuleName);
        this.handlers = {};
        this.logger = new Logger_1.Logger(this.ModuleName);
        this.handlers[RequestNames_1.default.IntentRequest] = new IntentRequestHandler_1.IntentRequestHandler();
        this.handlers[RequestNames_1.default.LaunchRequest] = new LaunchRequestHandler_1.LaunchRequestHandler();
        this.handlers[RequestNames_1.default.SessionEndedRequest] = new SessionEndedRequestHandler_1.SessionEndedRequestHandler();
        this.unknownRequestHandler = new UnknownRequestHandler_1.UnknownRequestHandler();
        this.preProcessor = new NullRequestHandler_1.default();
        this.postProcessor = new NullRequestPostProcessor_1.default();
    }
    static handler(event, context) {
        return new UtterUnderstanding().handleRequest(event, context);
    }
    handleRequest(event, context) {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)}, __CONTEXT(${JSON.stringify(context)}))`);
        let result;
        try {
            result = this.preProcessor
                .handleRequest(event, context)
                .then(() => {
                let handler = this.handlers[event.request.type] || this.unknownRequestHandler;
                return handler.handleRequest(event, context);
            })
                .then((response) => {
                return this.postProcessor.handleRequest(event, context, response);
            })
                .catch((error) => {
                return new Promise((_, reject) => { reject(error); });
            });
        }
        catch (error) {
            this.logger.error(`${error}`);
            result = new Promise((_, reject) => { reject(error); });
        }
        return result;
    }
    registerPreProcessHandler(handler) {
        this.preProcessor = handler;
    }
    registerRequestHandler(requestName, handler) {
        this.handlers[requestName] = handler;
    }
    registerPostProcessHandler(handler) {
        this.postProcessor = handler;
    }
}
exports.UtterUnderstanding = UtterUnderstanding;
//# sourceMappingURL=UtterUnderstanding.js.map